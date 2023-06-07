require("dotenv").config();
const mongoose = require("mongoose");

const Booking = require("./models/Booking");
const { mockBookingsData } = "../src/data/bookings";

const createMockBookingsDB = async () => {
  let connection;
  const connectionString = process.env.MONGO_BOOKINGS_KEY;
  try {
    mongoose.set("strictQuery", false);
    connection = await mongoose.connect(connectionString);

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
