import { Schema, model } from "mongoose";
import path from "path";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

const imageSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    filename: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

imageSchema.plugin(mongooseLeanVirtuals);

imageSchema.virtual("uniqueId").get(function () {
  return this.filename.replace(path.extname(this.filename), "");
});

export default model("Image", imageSchema);
