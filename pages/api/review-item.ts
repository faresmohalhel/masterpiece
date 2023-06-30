import connectMongo from "@/utils/connectMongo";
import Item from "@/models/itemModel";

import NextCors from "nextjs-cors";
import slugify from "slugify";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic

  if (req.method === "POST") {
    try {
      console.log("connecting to mongo, adding review");
      await connectMongo();
      console.log("connected to mongo, adding review");

      const { productName, userName, description, rating, title } = req.body;
      console.log(productName, userName, description, rating, title);

      if (!(productName && userName && description && rating && title)) {
        res
          .status(400)
          .json({ status: "fail", message: "all input is required" });
      }

      const item = await Item.findOneAndUpdate(
        { slug: slugify(productName) },
        {
          $inc: { usersRating: rating },
          $push: {
            usersReviews: {
              username: userName,
              rating,
              title,
              description,
              date: new Date(),
            },
          },
        }
      );

      console.log(item);

      res.status(200).json({
        status: "success",
        item: {
          name: item.name,
          description: item.description,
          category: item.category,
          slug: item.slug,
          usersReviews: item.usersReviews,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({ status: "fail", message: error });
    }
  }
}

// const items = async (req: any, res: any) => {

// };

// export default items;
