import { Schema, Types, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  puplishDate: {
    type: Date,
    default: new Date(),
  },
});
export const Book = model("Book", bookSchema);
