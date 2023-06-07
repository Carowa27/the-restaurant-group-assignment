const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    ordernumber: { type: Number },
    guests: { type: Number },
    date: { type: String },
    sessionstart: {
      type: Number,
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
