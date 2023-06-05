import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const cors = require("cors");
const bookingRoutes = require("./src/routes/bookingRoutes");

dotenv.config();

const app: Express = express();
const port = (process.env.PORT as string) || "2525";
const connectionString = process.env.MONGODB_BOOKINGS_KEY as string;
//fixa conntectionstring som är kopplad t bookings

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:4000/"],
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Processing ${req.method} request to ${req.path}`);

  next();
});

app.use("/api/v1/Bookings", bookingRoutes);

async function run() {
  try {
    mongoose.set("strictQuery", false);
    const connectToDB = await mongoose.connect(connectionString);
    console.log(`MongoDB connected: ${connectToDB.connection.host}`);

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("db error", error);
  }
}

run();
