import User from "@/models/userModel";
import connectMongo from "@/utils/connectMongo";

import NextCors from "nextjs-cors";
import slugify from "slugify";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic

  // if (req.method === "POST") {
  //   try {
  //     console.log("connecting to mongo, items");
  //     await connectMongo();
  //     console.log("connected to mongo, items");

  //     const { name, description, category } = req.body;
  //     console.log(name, description, category);

  //     if (!(name && description && category)) {
  //       res
  //         .status(400)
  //         .json({ status: "fail", message: "all input is required" });
  //     }

  //     const item = await Item.create({
  //       name,
  //       description,
  //       category,
  //       slug: slugify(name),
  //     });

  //     console.log(item, slugify(name));

  //     res.status(200).json({
  //       status: "success",
  //       item: {
  //         name: item.name,
  //         description: item.description,
  //         category: item.category,
  //         slug: item.slug,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     res.json({ status: "fail", message: error });
  //   }
  // }

  if (req.method === "GET") {
    try {
      console.log("connecting to mongo, users");
      await connectMongo();
      console.log("connected to mongo, users");

      const users = await User.find({
        active: true,
      });
      res.json({ status: "success", users: users });
    } catch (error) {
      res.json({ status: "fail", message: error });
    }
  }

  if (req.method === "PATCH") {
    try {
      console.log("connecting to mongo, update items");
      await connectMongo();
      console.log("connected to mongo, update items");

      const { name, email, role } = req.body;

      let updateObject: { name?: String; email?: String; role?: String } = {};

      if (email) {
        updateObject.email = email;
      }
      if (name) {
        updateObject.name = name;
      }
      if (role) {
        updateObject.role = role;
      }

      const user = await User.findOneAndUpdate(
        {
          email,
        },
        updateObject
      );

      res.status(200).json({
        status: "success",
        item: {
          name: user.name,
          email: user.email,
          role: user.role,
          subscribed: user.subscribed,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({ status: "fail", message: error });
    }
  }
  if (req.method === "PUT") {
    try {
      console.log("connecting to mongo, delete users");
      await connectMongo();
      console.log("connected to mongo, delete users");

      const { email } = req.body;
      console.log(email);

      const user = await User.findOneAndUpdate(
        {
          email,
        },
        {
          active: false,
        }
      );

      res.status(200).json({
        status: "success",
        user: {
          name: user.name,
          email: user.email,
          role: user.role,
          subscribed: user.subscribed,
          subscriptionExpirationDate: user.subscriptionExpirationDate,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({ status: "fail", message: error });
    }
  }
}
