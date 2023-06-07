const {
  NotFoundError,
  CustomAPIError,
  BadRequestError,
} = require("../lib/errorHandling");
const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const ordernumber = req.body.ordernumber;
    const guests = req.body.guests;
    const date = req.body.date;
    const sessionstart = req.body.sessionstart;
    const user = req.body.user;

    const newBooking = await Booking.create({
      ordernumber: ordernumber,
      guests: guests,
      date: date,
      sessionstart: sessionstart,
      user: user,
    });

    if (!newBooking) throw new CustomAPIError("Internal error");

    return res
      .setHeader(
        "Location",
        `http://localhost:${process.env.PORT}/api/v1/bookings/${newBooking._id}`
      )
      .status(201)
      .json(newBooking);
  } catch (error) {
    console.log(error);

    return res.sendStatus(500).json({ message: "Internal error" });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const allBookings = await Booking.find();

    if (!allBookings) throw new NotFoundError("No bookings were found");
    console.log(res);
    console.log(allBookings);
    return res.json({ data: allBookings });
  } catch (error) {
    console.log(error);

    return res.sendStatus(500).json({ message: "Internal error" });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    // if (bookingId.length != 24) {
    //   return res.status(400).json({ message: "id is invalid" });
    // }
    const bookingToFind = await Booking.findById(bookingId);

    if (!bookingToFind) throw new NotFoundError("This booking was not found");

    return res.json(bookingToFind);
  } catch (error) {
    console.log(error);

    return res.sendStatus(500).json({ message: "Internal error" });
  }
};

//updateBooking

exports.deleteBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    //   if (bookingId.length != 24) {
    //     return res.status(400).json({ message: "id is invalid" });
    //   }

    const bookingIdToDelete = await Booking.findById(bookingId);
    if (!bookingIdToDelete)
      throw new NotFoundError("This booking was not found");

    await bookingIdToDelete.delete();

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);

    return res.sendStatus(500).json({ message: "Internal error" });
  }
};
