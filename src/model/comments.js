import { Schema, model, models } from "mongoose";

const commentsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    requierd: true,
  },
  rescomment: {
    type: String,
    requierd: true,
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "USER",
  },
  published: {
    type: Boolean,
    default: false,
  },
});
const Comments = models.Comments || model("comments", commentsSchema);
export default Comments;
