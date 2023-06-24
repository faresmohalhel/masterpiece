import mongoose, { models } from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "an item must have a name"],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, "an item must have an description"],
  },
  category: {
    type: String,
  },
  image: {
    type: String,
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

const Item = models.Item || mongoose.model("Item", itemSchema);

export default Item;
