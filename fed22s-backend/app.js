require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bookingRoutes = require("./src/routes/bookingRoutes");

// dotenv.config();

const app = express();
const port = process.env.PORT || "2525";
const connectionString = process.env.MONGO_BOOKINGS_KEY;

app.use(express.json());

app.use(
  cors({
    methods: ["GET", "PUT", "POST", "DELETE", "OPTION"],
  })
);

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);

  next();
});

app.use("/api/v1/bookings", bookingRoutes);

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
