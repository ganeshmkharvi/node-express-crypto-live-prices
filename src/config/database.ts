import mongoose from "mongoose";
import config from './config';
import * as constants from "../utility/constants";

export function connect() {
    console.log(config.mongoDbUrl);
  // Connecting to the database
  mongoose
    .connect(config.mongoDbUrl)
    .then(() => {
      console.log(constants.connectedToDb);
    })
    .catch((error) => {
      console.log(constants.dbConnectionFailed);
      console.error(error);
      process.exit(1);
    });
}
