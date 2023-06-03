const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    bookinginfo: {
      type: [
        {
          ordernumber: { type: Number, required: true },
          guests: { type: Number, required: true },
          date: { type: String, required: true },
          sessionstart: {
            type: Number,
            required: true,
          },
        },
      ],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", BookingSchema);
