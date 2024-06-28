import { Schema, Types, model } from "mongoose";

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  bithDate: {
    type: Date,
  },
  books: {
    type: [Types.ObjectId],
    ref: "Book",
  },
});
export const Author = model("Author", authorSchema);
