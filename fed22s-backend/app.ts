import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const bookingRoutes = require("./src/routes/bookingRoutes");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 2525;
let connectionString = process.env.MONGODB_BOOKINGS_KEY as string;
//fixa conntectionstring som är kopplad t bookings

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Processing ${req.method} request to ${req.path}`);

  next();
});

app.use("/api/v1/bookings", bookingRoutes);

async function run() {
  try {
    mongoose.set("strictQuery", false);
    const connectToDB = await mongoose.connect(connectionString as string);
    console.log(`MongoDB connected: ${connectToDB.connection.host}`);

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run();
