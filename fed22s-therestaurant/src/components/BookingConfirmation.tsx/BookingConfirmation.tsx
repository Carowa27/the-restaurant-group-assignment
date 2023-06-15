import { MyEearlyBookingWrapper } from "../styled/Wrappers";
import { IBooking } from "../../models/IBooking";
import { deleteBooking } from "../../services/bookingServices";
import { useNavigate } from "react-router-dom";

interface IBookingConfirmationProps {
  userBooking: IBooking;
}

export const BookingConfirmation = (props: IBookingConfirmationProps) => {
  const navigate = useNavigate();

  //delete logic
  const handleDelete = async () => {
    const response = await deleteBooking(props.userBooking._id);
    if (response?.status === 204) {
      // Send mail
      navigate(`/bookingdeleted`);
    } else {
      console.error("Något gick fel vid bokningen");
    }
  };

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
      <button onClick={handleDelete}>ta bort bokning</button>
    </MyEearlyBookingWrapper>
  );
};
