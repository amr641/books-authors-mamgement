import { Book } from "../../database/models/bookModel.js";

const addBook = async (req, res) => {
  try {
    const book = await Book.insertMany(req.body);
    res.status(201).json({ message: "success", book });
  } catch (error) {
    res.json(error);
  }
};
const getAllBooks = async (req, res) => {
  try {
    let page = req.query.page;
    let limit = 10;
    let offset = (page - 1) * limit;
    const books = await Book.find().skip(offset).limit(limit);
    if (books.length) return res.status(200).json(books);
    res.status(409).json({ message: "no more books" });
  } catch (error) {
    res.json(error);
  }
};
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    res.json(error);
  }
};
const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(book);
  } catch (error) {
    res.json(error);
  }
};
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book) return res.status(200).json({ message: "success", book });
    res.status(409).json({ message: "no result" });
  } catch (error) {
    res.json(error);
  }
};
const filterByTitleOrAuthor = async (req, res) => {
  try {
    let query = {
      $or: [{ title: req.query.title }, { author: req.query.author }],
    };
    const books = await Book.findOne(query);
    if (books) return res.status(200).json(books);
    res.json({ message: "no results" });
  } catch (error) {}
};
export {
  addBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
  filterByTitleOrAuthor,
};
