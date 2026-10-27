import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MangoDB_URI;

    if (!mongoURI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;