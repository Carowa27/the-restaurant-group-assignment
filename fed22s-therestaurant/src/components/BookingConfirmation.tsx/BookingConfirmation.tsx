import { MyEearlyBookingWrapper } from "../styled/Wrappers";
import { IBooking } from "../../models/IBooking";

interface IBookingConfirmationProps {
  userBooking: IBooking;
}

export const BookingConfirmation = (props: IBookingConfirmationProps) => {
  return (
    <MyEearlyBookingWrapper>
      <p>Orderid: {props.userBooking?._id}</p>
      <p>Förnamn: {props.userBooking?.user.firstname}</p>
      <p>Efternamn: {props.userBooking?.user.lastname}</p>
      <p>Email: {props.userBooking?.user.email}</p>
      <p>Telefonnummer: {props.userBooking?.user.phone}</p>
      <p>Datum: {props.userBooking?.date}</p>
      <p>Sittning: {props.userBooking?.sessionstart}</p>
      <p>Antal gäster: {props.userBooking?.guests}</p>
    </MyEearlyBookingWrapper>
  );
};
