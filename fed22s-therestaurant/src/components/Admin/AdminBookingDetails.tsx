import { useState, useEffect } from "react";
import { IBooking } from "../../models/IBooking";
import { getBookings } from "../../services/bookingServices";
import { AdminEditButton } from "../styled/Buttons";
import { AdminForm } from "../styled/Forms";
import { BookingInfoUL } from "../styled/UnorderdLists";
import { Loading } from "../Loading";

export const AdminBookingDetails = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const bookings = await getBookings();
      setBookings(bookings);
      console.log(bookings);
    };
    getData();
  }, []);

  const startLoadingScr = (msg: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (msg === "delete") {
        handleDelete();
      }
      if (msg === "update") {
      }
    }, 1000);
  };

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
          <AdminEditButton
            onClick={() => {
              startLoadingScr("update");
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </AdminEditButton>
          <AdminEditButton
            onClick={() => {
              startLoadingScr("delete");
            }}
          >
            <i className="fa-regular fa-trash-can"></i>
          </AdminEditButton>
        </span>
      </AdminForm>
    );
  });
  return (
    <>
      <div>{bookingHtml}</div>
      {isLoading && <Loading></Loading>}
    </>
  );
};
