import { Schema, model } from "mongoose";
import path from "path";

const ImageSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId },
  title: { type: String },
  description: { type: String },
  type: { type: String },
  zone: { type: String},
  numrooms: { type: String},
  filename: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now },
});

ImageSchema.virtual("uniqueId").get(function () {
  return this.filename.replace(path.extname(this.filename), "");
});

export default model("Image", ImageSchema);
