import { cookies } from "next/dist/client/components/headers";
import connectMongo from "@/utils/connectMongo";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getCookies, setCookie, getCookie, deleteCookie } from "cookies-next";
import { serialize } from "cookie";

const users = async (req: any, res: any) => {
  if (req.method === "POST") {
    try {
      console.log("connecting to mongo");
      await connectMongo();
      console.log("connected to mongo");

      const { email, password } = req.body;

      if (!(email && password)) {
        res
          .status(400)
          .json({ status: "fail", message: "all input is required" });
      }

      const user = await User.findOne({ email });
      console.log("login", email, password, user);

      console.log(await bcrypt.compare(password, user.password));
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email, role: user.role },
          process.env.TOKEN_KEY,
          {
            expiresIn: "7d",
          }
        );
        user.token = token;
        // setCookie("token", token);

        // const cookie = serialize("token", token, {
        //   path: "/",
        //   httpOnly: true,
        // });

        // res.setHeader("Set-Cookie", cookie);

        console.log("iom here");

        res.status(200).json({
          status: "success",
          user: {
            name: user.name,
            email: user.email,
            role: user.role,
            token: user.token,
          },
        });
      }
    } catch (error) {
      console.log(error);
      res.json({ status: "fail", message: error });
    }
  }
};

export default users;
