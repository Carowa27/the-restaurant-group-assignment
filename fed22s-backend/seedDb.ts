// require("dotenv").config();
const Bookings = require("../fed22s-therestaurant/src/models/IBooking");

//ändra för ts
//vite har inbyggt env så vi kan använda denna

const connectionString = import.meta.env.VITE_APP_MONGODB;
const populateDb = async (connectionString) => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(connectionString);
    console.log(`MongoDB connected: ${conn.connection.host}`);

    await Bookings.deleteMany();
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDb(process.env.MONGODB);
