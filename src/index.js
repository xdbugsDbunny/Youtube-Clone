import dotenv from "dotenv";
import databaseConnection from "./database/connection.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

databaseConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(` Server is Running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB CONNECTION FAILED !!!!! ", err);
  });

/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR_ONE : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR : ", error);
    throw error;
  }
})();*/
