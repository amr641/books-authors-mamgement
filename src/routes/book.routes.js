import { Router } from "express";
import * as bc from "../controllers/book.controller.js";

const bookRouter = Router();
bookRouter.route("/").post(bc.addBook).get(bc.getAllBooks);
bookRouter.get("/api", bc.filterByTitleOrAuthor);
bookRouter
  .route("/:id")
  .get(bc.getBook)
  .patch(bc.updateBook)
  .delete(bc.deleteBook);
export default bookRouter;
