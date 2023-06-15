import { useState, useEffect } from "react";
import { IBooking } from "../../models/IBooking";
import { getBookings } from "../../services/bookingServices";
import { AdminEditButton } from "../styled/Buttons";
import { AdminForm } from "../styled/Forms";
import { BookingInfoUL } from "../styled/UnorderdLists";

export const AdminBookingDetails = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    const getData = async () => {
      const bookings = await getBookings();
      setBookings(bookings);
      console.log(bookings);
    };
    getData();
  }, []);

  const handleDelete = () => {
    alert("Är du säker på att du vill radera bokningen?");
  };

  const bookingHtml = bookings.map((b, index) => {
    return (
      <AdminForm key={index}>
        <BookingInfoUL>
          <li>Datum: {b.date}</li>
          <li>Tid: {b.sessionstart}</li>
          <li>Antal gäster: {b.guests}</li>
          <li>Bokningsnummer: {b._id}</li>
        </BookingInfoUL>
        <span>
          <AdminEditButton>
            <i className="fa-regular fa-pen-to-square"></i>
          </AdminEditButton>
          <AdminEditButton onClick={handleDelete}>
            <i className="fa-regular fa-trash-can"></i>
          </AdminEditButton>
        </span>
      </AdminForm>
    );
  });
  return (
    <>
      <div>{bookingHtml}</div>
    </>
  );
};
