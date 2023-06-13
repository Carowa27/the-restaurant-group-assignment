import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Booking } from "../components/Booking/Booking";

export const BookingPage = () => {
  const [showCreateBooking, setShowCreateBooking] = useState(false);
  const [showUpdateBooking, setShowUpdateBooking] = useState(false);
  const changeToCreate = () => {
    setShowCreateBooking(true);
  };
  return (
    <>
      <button onClick={changeToCreate}>Skapa Bokning</button>
      <button>Ändra bokning</button>
      {/* {showCreateBooking && <Booking></Booking>} */}
      {/* {showUpdateBooking && <MyBookingPage></MyBookingPage>} */}
      <Booking></Booking>
    </>
  );
};
