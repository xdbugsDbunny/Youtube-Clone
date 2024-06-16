import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const databaseConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n DATABASE CONNECTED !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB Connection : ", error);
    process.exit(1);
  }
};

export default databaseConnection;
