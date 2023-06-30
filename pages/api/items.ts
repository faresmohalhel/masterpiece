import { Image } from "next/image";
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

      const { name, description, category, image } = req.body;
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
        image,
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

      const items = await Item.find({
        deleted: false,
      });
      res.json({ status: "success", items: items });
    } catch (error) {
      res.json({ status: "fail", message: error });
    }
  }

  if (req.method === "PATCH") {
    try {
      console.log("connecting to mongo, update items");
      await connectMongo();
      console.log("connected to mongo, update items");

      const { name, description, category, expertRating, image } = req.body;

      let updateObject = {};

      if (description) {
        updateObject.description = description;
      }
      if (category) {
        updateObject.category = category;
      }
      if (image) {
        updateObject.image = image;
      }
      if (expertRating) {
        updateObject.expertRating = expertRating;
      }

      const item = await Item.findOneAndUpdate(
        {
          slug: slugify(name),
        },
        updateObject
      );

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
  if (req.method === "PUT") {
    try {
      console.log("connecting to mongo, delete items");
      await connectMongo();
      console.log("connected to mongo, delete items");

      const { name } = req.body;
      console.log(name);

      const item = await Item.findOneAndUpdate(
        {
          slug: slugify(name),
        },
        {
          deleted: true,
        }
      );

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
}
