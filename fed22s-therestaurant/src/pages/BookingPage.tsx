import { useParams } from "react-router-dom";
import { useState } from "react";
import { Booking } from "../components/Booking/Booking";
import { CreateAndUpdateBookingButton } from "../components/styled/Buttons";
import {
  BookingPageWrapper,
  ButtonWrapper,
} from "../components/styled/Wrappers";

export const BookingPage = () => {
  const params = useParams();

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
    <BookingPageWrapper>
      <ButtonWrapper>
        <CreateAndUpdateBookingButton onClick={changeToCreate}>
          Skapa Bokning
        </CreateAndUpdateBookingButton>
        <CreateAndUpdateBookingButton onClick={changeToMyBooking}>
          Ändra bokning
        </CreateAndUpdateBookingButton>
      </ButtonWrapper>
      {showCreateBooking && <Booking msg={createMsg}></Booking>}
      {showUpdateBooking && <Booking msg={updateMsg}></Booking>}
    </BookingPageWrapper>
  );
};
