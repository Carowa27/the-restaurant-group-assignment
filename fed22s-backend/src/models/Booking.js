const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    ordernumber: {
      type: Number,
      // required: true
    },
    guests: {
      type: Number,
      // required: true
    },
    date: {
      type: String,
      // required: true
    },
    sessionstart: {
      type: Number,
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
        type: Number,
        // required: true,
        minLength: 7,
        maxLength: 10,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", BookingSchema);
