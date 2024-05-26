import mongoose from "mongoose";

export const connect = async () => {
  await mongoose.connect(process.env.ATLAS_URI);
  console.log("DB CONNECTED");
};
