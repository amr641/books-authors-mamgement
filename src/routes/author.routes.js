import { Router } from "express";
import * as ac from "../controllers/author.controller.js";

const authorRouter = Router();
authorRouter.route("/").post(ac.addAuthor).get(ac.getAllAuthors);
authorRouter.get("/api", ac.searchOnAuthor);
authorRouter
  .route("/:id")
  .get(ac.getAuthor)
  .patch(ac.updateAuthor)
  .delete(ac.deleteAuthor);
// search functionality 'using the query params'
//filter author by name or bio

export default authorRouter;
