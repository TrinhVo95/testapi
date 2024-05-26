import mongoose, { Schema } from "mongoose";

const resultModel = new Schema({
  userName: { type: String },
  result: { type: Array, default: [] },
  earnPoints: { type: Number, default: 0 },
  achives: { type: String, default: "" },
  createAt: { type: Date, default: Date.now },
});

export default mongoose.model("Result", resultModel);
