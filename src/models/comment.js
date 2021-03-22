import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    image_id: { type: Schema.Types.ObjectId },
    email: { type: String },
    name: { type: String },
    gravatar: { type: String },
    comment: { type: String },
    timestamp: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

CommentSchema.virtual("image")
  .set(function (image) {
    this._image = image;
  })
  .get(function () {
    return this._image;
  });

export default model("Comment", CommentSchema);
