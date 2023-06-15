import { useParams } from "react-router-dom";
import { useState } from "react";
import { Booking } from "../components/Booking/Booking";

export const BookingPage = () => {
  const params = useParams();

  // to do fixa till den här komponenten

  const [showCreateBooking, setShowCreateBooking] = useState(false);
  const [showUpdateBooking, setShowUpdateBooking] = useState(false);
  const changeToCreate = () => {
    setShowCreateBooking(true);
    setShowUpdateBooking(false);
  };
  const changeToMyBooking = () => {
    setShowUpdateBooking(true);
    setShowCreateBooking(false);
  };

  const createMsg = "createPage";
  const updateMsg = "updatePage";
  return (
    <>
      <button onClick={changeToCreate}>Skapa Bokning</button>
      <button onClick={changeToMyBooking}>Ändra bokning</button>
      {showCreateBooking && <Booking msg={createMsg}></Booking>}
      {showUpdateBooking && <Booking msg={updateMsg}></Booking>}
    </>
  );
};
