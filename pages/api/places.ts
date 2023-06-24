import connectMongo from "@/utils/connectMongo";
import Place from "@/models/placeModel";

import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic

  if (req.method === "POST") {
    try {
      console.log("connecting to mongo, places");
      await connectMongo();
      console.log("connected to mongo, places");

      const { name, description, category } = req.body;
      console.log(name, description, category);

      if (!(name && description && category)) {
        res
          .status(400)
          .json({ status: "fail", message: "all input is required" });
      }

      const place = await Place.create({
        name,
        description,
        category,
      });

      console.log(place);

      res.status(200).json({
        status: "success",
        place: {
          name: place.name,
          description: place.description,
          category: place.category,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({ status: "fail", message: error });
    }
  }
}

// const places = async (req: any, res: any) => {

// };

// export default places;
