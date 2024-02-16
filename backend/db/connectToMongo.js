import mongoose from "mongoose";

export default async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to MongoDb");
  } catch (error) {
    console.log("error connecting to DB", error.message);
  }
}
