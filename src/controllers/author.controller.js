import { Author } from "../../database/models/authorModel.js";

const addAuthor = async (req, res) => {
  try {
    const author = await Author.insertMany(req.body);
    res.status(201).json({ message: "success", author });
  } catch (error) {
    res.json(error);
  }
};
const getAllAuthors = async (req, res) => {
  try {
    let page = req.query.page;
    let limit = 10;
    let offset = (page - 1) * limit;
    const authors = await Author.find({}, { __v: 0, _id: 0 })
      .limit(limit)
      .skip(offset);
    if (authors.length) return res.status(200).json(authors);
    res.status(409).json({ message: "no more authors" });
  } catch (error) {
    res.json(error);
  }
};
const getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate("books");
    res.status(200).json(author);
  } catch (error) {
    res.json(error);
  }
};
const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(author);
  } catch (error) {
    res.json(error);
  }
};
const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (author) return res.status(200).json({ message: "success", author });
    res.status(409).json({ message: "author not found" });
  } catch (error) {
    res.json(error);
  }
};
const searchOnAuthor = async (req, res) => {
  try {
    // console.log(req.query.name);
    let query = { $or: [{ name: req.query.name }, { bio: req.query.bio }] };
    const author = await Author.findOne(query);
    // console.log(author);
    res.status(200).json(author);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
export {
  addAuthor,
  getAllAuthors,
  getAuthor,
  updateAuthor,
  deleteAuthor,
  searchOnAuthor,
};
