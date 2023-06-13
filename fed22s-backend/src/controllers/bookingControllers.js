const {
  NotFoundError,
  CustomAPIError,
  BadRequestError,
} = require("../lib/errorHandling");

//fungerar ✓
const Booking = require("../models/Booking");
const { mockBookingsData } = require("../data/mockBookingsData");

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

//fungerar ✓
exports.getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const bookingToFind = await Booking.findById(bookingId);

    if (!bookingToFind)
      throw new NotFoundError(" SORRY! This booking was not found");

    return res.json(bookingToFind);
  } catch (error) {
    console.log(error);

    return res.sendStatus(500).json({ message: "Internal error" });
  }
};

// fungerar ✓
exports.createBooking = async (req, res) => {
  try {
    const {
      guests,
      date,
      sessionstart,
      user: { firstname, lastname, email, phone },
    } = req.body;

    const newBooking = await Booking.create({
      guests,
      date,
      sessionstart,
      user: {
        firstname,
        lastname,
        email,
        phone,
      },
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

// fungerar ✓
exports.deleteBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;

    const bookingToDelete = await Booking.findById(bookingId);
    if (!bookingToDelete) {
      throw new NotFoundError("This booking was not found");
    }

    await Booking.findByIdAndDelete(bookingId);

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);

    return res.sendStatus(500).json({ message: "Internal error" });
  }
};

//  fungerar ✓

exports.updateBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const {
      guests,
      date,
      sessionstart,
      user: { firstname, lastname, email, phone },
    } = req.body;

    if (!bookingId) {
      throw new BadRequestError("You must provide a bookingId");
    }

    const bookingToUpdate = await Booking.findById(bookingId);
    if (!bookingToUpdate) {
      throw new NotFoundError("This booking does not exist");
    }

    if (id) bookingToUpdate.id = id;
    if (guests) bookingToUpdate.guests = guests;
    if (date) bookingToUpdate.date = date;
    if (sessionstart) bookingToUpdate.sessionstart = sessionstart;

    if (firstname) bookingToUpdate.user.firstname = firstname;
    if (lastname) bookingToUpdate.user.lastname = lastname;
    if (email) bookingToUpdate.user.email = email;
    if (phone) bookingToUpdate.user.phone = phone;

    const updatedBooking = await bookingToUpdate.save();

    return res.json(updatedBooking);
  } catch (error) {
    console.log(error);

    return res.sendStatus(500).json({ message: "Internal error" });
  }
};
