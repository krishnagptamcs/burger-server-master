import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGODB_URL);

  console.log(`Database is connect successfully`);
};
