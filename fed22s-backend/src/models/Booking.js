const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    guests: {
      type: String,
      // required: true
    },
    date: {
      type: String,
      // required: true
    },
    sessionstart: {
      type: String,
      // required: true,
    },
    user: {
      firstname: {
        type: String,
        // required: true,
        minLength: 2,
        maxLength: 20,
      },
      lastname: {
        type: String,
        // required: true,
        minLength: 2,
        maxLength: 20,
      },
      email: {
        type: String,
        // required: true,
      },
      phone: {
        type: String,
        // required: true,
        minLength: 7,
        maxLength: 10,
      },
      id: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", BookingSchema);
