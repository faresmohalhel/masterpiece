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

      const items = await Item.find({});

      const reviews = items.reduce((result, item) => {
        if (item.usersReviews.length > 0) {
          // return item.usersReviews;
          result.push(item.usersReviews);
        }

        return result;
      }, []);

      res.json({
        status: "success",
        reviews: {
          usersReviews: reviews,
        },
      });
    } catch (error) {
      res.json({ status: "fail", message: error });
    }
  }
}
