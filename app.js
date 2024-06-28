"use strict";
import express from "express";

import dbConn from "./database/dbConnection.js";
import bootstrab from "./src/bootstrab.js";
const app = express();
const port = 3000;
app.use(express.json());
bootstrab(app);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
