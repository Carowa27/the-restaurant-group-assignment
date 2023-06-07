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
router.get("/:bookingId", getBookingById);
router.put("/:bookingId", updateBookingById);
router.delete("/:bookingId", deleteBookingById);

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
