import authorRouter from "./routes/author.routes.js";
import bookRouter from "./routes/book.routes.js";

const bootstrab = function (app) {
  app.use("/books", bookRouter);
  app.use("/authors", authorRouter);
  app.use("*", (_, res) => {
    res.json({ message: "not found" });
  });
};
export default bootstrab;
