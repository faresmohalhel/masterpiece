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
  slug: {
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
  usersReviews: [
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
      date: {
        type: Date,
      },
    },
  ],
  deleted: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
  expertRating: {
    type: Number,
    default: 0,
  },
  usersRating: {
    type: Number,
    default: 0,
  },
});

const Item = models.Item || mongoose.model("Item", itemSchema);

export default Item;
