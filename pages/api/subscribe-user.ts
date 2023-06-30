import connectMongo from "@/utils/connectMongo";

import NextCors from "nextjs-cors";
import slugify from "slugify";
import User from "@/models/userModel";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic

  if (req.method === "PATCH") {
    try {
      console.log("connecting to mongo, items");
      await connectMongo();
      console.log("connected to mongo, items");

      const { email, duration } = req.body;

      if (!(email && duration)) {
        res
          .status(400)
          .json({ status: "fail", message: "all input is required" });
      }

      const currentDate = new Date();
      const futureDate = new Date();
      futureDate.setMonth(
        currentDate.getMonth() + (+duration > 12 ? 288 : duration)
      );

      const user = await User.findOneAndUpdate(
        {
          email,
        },
        {
          subscribed: true,
          subscriptionExpirationDate: futureDate,
        }
      );

      res.status(200).json({
        status: "success",
        user: user.email,
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
