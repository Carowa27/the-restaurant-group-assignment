import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookingConfirmation } from "../components/BookingConfirmation.tsx/BookingConfirmation";
import { BookingForm } from "../components/styled/Forms";
import { BookingWrapper } from "../components/styled/Wrappers";
import { IBooking } from "../models/IBooking";
import { getBookingById } from "../services/bookingServices";

export const BookingConfirmedPage = () => {
  const { id, bookingType } = useParams();
  const [userBooking, setUserBooking] = useState<IBooking>();

  const getUserBookingById = async () => {
    try {
      if (id) {
        const data = await getBookingById(id);
        setUserBooking(data);
      }
    } catch (error) {
      console.error(`${error}: Något gick fel vid sökningen`);
    }
  };

  useEffect(() => {
    getUserBookingById();
  }, [id]);

  return (
    <>
      <BookingWrapper>
        <BookingForm>
          <i className="fa-regular fa-circle-check"></i>
          {bookingType === "confirm" ? (
            <h2>Tack för din bokning!</h2>
          ) : (
            <h2>Din bokning är nu uppdaterad!</h2>
          )}
        </BookingForm>
        {userBooking != null && (
          <BookingConfirmation userBooking={userBooking}></BookingConfirmation>
        )}
      </BookingWrapper>
    </>
  );
};
function fect(arg0: () => void) {
  throw new Error("Function not implemented.");
}
