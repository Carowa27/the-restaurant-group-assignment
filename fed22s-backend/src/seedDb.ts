require("dotenv").config();
// const mongoose = require("mongoose");
const Booking = require("../src/models/Booking");
const { mockBookingsData } = require("./bookings");

const createMockBookingsDB = async () => {
  let connection;
  const connectionString = process.env.MONGO_CONNECTION_STRING;
  try {
    mongoose.set("strictQuery", false);
    connection = await mongoose.connect(connectionString as string);

    console.log("Clearing database...");
    await Booking.deleteMany();

    console.log("Adding data...");
    await Booking.create(mockBookingsData);

    console.log("Database successfully populated with data...");
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) connection.disconnect();
    process.exit(0);
  }
};
createMockBookingsDB();
