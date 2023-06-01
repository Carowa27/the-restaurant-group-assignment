// require("dotenv").config();
// require("express-async-errors");
// const express = require("express");
// const mongoose = require("mongoose");
// const apiRoutes = require("./routes/api");
// const { errorMiddleware } = require("./middleware/errorMiddleware");

// const app = express();

// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`Processing ${req.method} request to ${req.path}`);
//   next();
// });

// app.use("/api/v1", apiRoutes);

// app.use(errorMiddleware);

// const port = process.env.PORT || 2525;
// const run = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     const conn = await mongoose.connect(process.env.MONGODB);
//     console.log(`MongoDB connected: ${conn.connection.host}`);

//     app.listen(port, () => {
//       console.log(
//         `Server is listening on ${
//           process.env.NODE_ENV === "development" ? "http://localhost:" : "port "
//         }${port}`
//       );
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// run();

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 2525;

app.get("/", (req: Request, res: Response) => {
  res.send("express working w ts");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
