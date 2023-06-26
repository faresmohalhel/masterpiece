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
      console.log("connecting to mongo, items");
      await connectMongo();
      console.log("connected to mongo, items");

      const { name, description, category } = req.body;
      console.log(name, description, category);

      if (!(name && description && category)) {
        res
          .status(400)
          .json({ status: "fail", message: "all input is required" });
      }

      const item = await Item.create({
        name,
        description,
        category,
        slug: slugify(name),
      });

      console.log(item, slugify(name));

      res.status(200).json({
        status: "success",
        item: {
          name: item.name,
          description: item.description,
          category: item.category,
          slug: item.slug,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({ status: "fail", message: error });
    }
  }

  if (req.method === "GET") {
    try {
      console.log("connecting to mongo, items");
      await connectMongo();
      console.log("connected to mongo, items");

      const items = await Item.find();
      res.json({ status: "success", items: items });
    } catch (error) {
      res.json({ status: "fail", message: error });
    }
  }
}

// const items = async (req: any, res: any) => {

// };

// export default items;
