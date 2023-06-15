import { MyEearlyBookingWrapper } from "../styled/Wrappers";
import { IBooking } from "../../models/IBooking";
import { deleteBooking } from "../../services/bookingServices";
import { useNavigate } from "react-router-dom";
import { DeleteWarningModal } from "./DeleteWarningModal";
import { useState } from "react";
import { CreateAndUpdateBookingButton } from "../styled/Buttons";

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
        <p>
          <b> Orderid:</b> {props.userBooking?._id}
        </p>
        <p>
          <b>Förnamn:</b> {props.userBooking?.user.firstname}
        </p>
        <p>
          <b>Efternamn:</b> {props.userBooking?.user.lastname}
        </p>
        <p>
          <b>Email:</b> {props.userBooking?.user.email}
        </p>
        <p>
          <b>Telefonnummer:</b> {props.userBooking?.user.phone}
        </p>
        <p>
          <b>Datum:</b> {props.userBooking?.date}
        </p>
        <p>
          <b>Sittning:</b> {props.userBooking?.sessionstart}
        </p>
        <p>
          <b>Antal gäster:</b> {props.userBooking?.guests}
        </p>
        {props.msg === "updatePage" && (
          <CreateAndUpdateBookingButton
            onClick={handleGdprInfo /*handleDelete*/}
          >
            Ta bort bokning
          </CreateAndUpdateBookingButton>
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
