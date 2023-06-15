import { useParams } from "react-router-dom";
import { useState } from "react";
import { Booking } from "../components/Booking/Booking";
import { SearchBookingButton } from "../components/styled/Buttons";

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
      <SearchBookingButton onClick={changeToCreate}>
        Skapa Bokning
      </SearchBookingButton>
      <SearchBookingButton onClick={changeToMyBooking}>
        Ändra bokning
      </SearchBookingButton>
      {showCreateBooking && <Booking msg={createMsg}></Booking>}
      {showUpdateBooking && <Booking msg={updateMsg}></Booking>}
    </>
  );
};
