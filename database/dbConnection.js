import { connect } from "mongoose";

const dbConn = connect("mongodb://localhost:27017/assignment8")
  .then(() => {
    console.log("server connected successfully");
  })
  .catch(() => {
    console.log("error database connection");
  });
export default dbConn;
