"use strict";
// // require("dotenv").config();
// // const Products = require("../src/models/Products");
// // const { mockProductData } = require("./products");
// const mongoose = require("mongoose");
// //ändra för ts
// //vite har inbyggt env så vi kan använda denna
// const connectionString = import.meta.env.VITE_APP_MONGODB;
// const populateDb = async (connectionString) => {
//   try {
//     mongoose.set("strictQuery", false);
//     const conn = await mongoose.connect(connectionString);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//     await Products.deleteMany();
//   } catch (error) {
//     console.error(error);
//   } finally {
//     process.exit(0);
//   }
// };
// populateDb(process.env.MONGODB);
