import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.DB);

export default connectMongo;
