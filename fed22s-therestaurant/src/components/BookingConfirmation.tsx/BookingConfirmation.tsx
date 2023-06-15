import { MyEearlyBookingWrapper } from "../styled/Wrappers";
import { IBooking } from "../../models/IBooking";
import { deleteBooking } from "../../services/bookingServices";
import { useNavigate } from "react-router-dom";
import { DeleteWarningModal } from "../DeleteWarningModal";
import { useState } from "react";

interface IBookingConfirmationProps {
  userBooking: IBooking;
  msg: string;
}

export const BookingConfirmation = (props: IBookingConfirmationProps) => {
  const navigate = useNavigate();

  const [showWarning, setShowWarning] = useState(false);

  const handleGdprInfo = () => {
    setShowWarning(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <MyEearlyBookingWrapper>
        <p>Orderid: {props.userBooking?._id}</p>
        <p>Förnamn: {props.userBooking?.user.firstname}</p>
        <p>Efternamn: {props.userBooking?.user.lastname}</p>
        <p>Email: {props.userBooking?.user.email}</p>
        <p>Telefonnummer: {props.userBooking?.user.phone}</p>
        <p>Datum: {props.userBooking?.date}</p>
        <p>Sittning: {props.userBooking?.sessionstart}</p>
        <p>Antal gäster: {props.userBooking?.guests}</p>
        {props.msg === "update" && (
          <button onClick={handleGdprInfo /*handleDelete*/}>
            ta bort bokning
          </button>
        )}
      </MyEearlyBookingWrapper>

      {showWarning && (
        <DeleteWarningModal
          booking={props.userBooking}
          closeModal={() => setShowWarning(false)}
        ></DeleteWarningModal>
      )}
    </>
  );
};
