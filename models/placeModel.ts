import mongoose, { models } from "mongoose";

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "an place must have a name"],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, "an place must have an description"],
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  location: {
    type:String,
  },
  locationName: {
    type:String
  },
  expertReview: {
    rating: {
      type: Number,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  userReviews: [
    {
      username: {
        type: String,
      },
      rating: {
        type: Number,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
});

const Place = models.Place || mongoose.model("Place", placeSchema);

export default Place;
