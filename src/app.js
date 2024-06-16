import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use in this use is used for middleware and config
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));
app.use(cookieParser());

// Routes

import userRouter from "./routes/user.route.js";


//Routes Decleration

app.use("/api/v1/users", userRouter)

//http://localhost:8000/api/v1/users/register

export { app };
