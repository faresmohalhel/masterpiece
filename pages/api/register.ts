import connectMongo from "@/utils/connectMongo";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { cookies } from "next/dist/client/components/headers";
import { getCookies, setCookie, getCookie, deleteCookie } from "cookies-next";
import { serialize } from "cookie";

const users = async (req, res) => {
  if (req.method === "POST") {
    try {
      console.log("connecting to mongo");
      await connectMongo();
      console.log("connecting to mongo");

      const { name, email, password, role } = req.body;

      if (!(email && password && name && role)) {
        res
          .status(400)
          .json({ status: "fail", message: "all input is required" });
      }

      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.status(409).json({
          status: "fail",
          message: "user already exists, please login",
        });
      }

      const encryptedPassword = await bcrypt.hash(password, +process.env.SALT);

      console.log("creating document");
      const user = await User.create({
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        role,
      });
      console.log("created document");

      const token = jwt.sign(
        {
          user_id: user._id,
          email,
          role,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "7d",
        }
      );

      user.token = token;
      // setCookie("token", token);
      // res.cookies.set("token", token, {
      //   path: "/",
      //   httpOnly: true,
      // });

      const cookie = serialize("token", token, {
        path: "/",
        httpOnly: true,
      });

      res.status(201).json({
        status: "success",
        user: {
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
          token: user.token,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
};

export default users;