import User from "@/models/userModel";
import Item from "@/models/itemModel";
import connectMongo from "@/utils/connectMongo";

import NextCors from "nextjs-cors";
import slugify from "slugify";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "GET") {
    try {
      console.log("connecting to mongo, stats");
      await connectMongo();
      console.log("connected to mongo, stats");

      const users = await User.find({});
      const items = await Item.find({});

      let payments = users.reduce((acc, user) => {
        if (user.subscribed) {
          let pay = Math.ceil(
            (new Date(user.subscriptionExpirationDate).getTime() - Date.now()) /
              (1000 * 60 * 60 * 24 * 30)
          );

          return pay > 12 ? acc + pay * 20 : acc + 500;
        } else {
          return acc + 0;
        }
      }, 0);

      let reviews = items.reduce((acc, item) => {
        console.log(item.usersReviews);
        if (item.usersReviews && item.usersReviews.length > 0) {
          return acc + item.usersReviews.length;
        } else {
          return acc + 0;
        }
      }, 0);

      res.json({
        status: "success",
        stats: {
          users: users.length,
          items: items.length,
          payments,
          reviews,
        },
      });
    } catch (error) {
      res.json({ status: "fail", message: error });
    }
  }
}
