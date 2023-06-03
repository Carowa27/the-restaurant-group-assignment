const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
} = require("../controllers/bookingControllers");

router.post("/", createBooking);
router.get("/", getBookings);
router.get("/:cartId", getBookingById);
router.put("/:cartId", updateBookingById);
router.delete("/:cartId", deleteBookingById);

module.exports = router;

// USER NEEDS
//      createBooking
//      getBookingById,
//      updateBookingById,
//      deleteBookingById,

// ADMIN NEEDS
//      createBooking,
//      getBookings,
//      getBookingById,
//      updateBookingById,
//      deleteBookingById,
