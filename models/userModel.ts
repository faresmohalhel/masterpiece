import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a user must have a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "a user must have an email"],
    unique: [true, "a user email must be unique"],
  },
  password: {
    type: String,
    required: [true, "a user must have a password"],
  },
  role: {
    type: String,
    required: [true, "a user must have a role"],
  },
  token: {
    type: String,
  },
});

const User = models.User || mongoose.model("User", userSchema);

export default User;
