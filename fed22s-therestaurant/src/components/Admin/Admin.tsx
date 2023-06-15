import { ChangeEvent, useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { getBookings } from "../../services/bookingServices";
import { AdminEditButton, SearchBookingButton } from "../styled/Buttons";
import { AdminForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { AdminSearchBookingInput } from "../styled/Inputs";
import { BookingInfoUL, StyledLi } from "../styled/UnorderdLists";
import { AdminWrapper, BookingDetailWrapper } from "../styled/Wrappers";
import { AdminBookingById } from "./AdminBookingById";
import { AdminBookingDetails } from "./AdminBookingDetails";

export const Admin = () => {
  /*Denna komponent ska vi kunna se bokningar och 
  här ska vi också kunna ta oss till AdminBookingDetails.tsx
  */

  const [data, setData] = useState<IBooking[]>([]);
  const [bookings, setBookings] = useState(data);

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleSearch = () => {
    setSearch(true);
  };

  useEffect(() => {
    const getData = async () => {
      const bookings = await getBookings();
      setData(bookings);
      setBookings(bookings);
    };
    getData();
  }, []);

  const filterById = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setBookings(data.filter((d) => d._id.toString() === e.target.value));
  };

  console.log(bookings);

  const html = bookings.map((b, index) => {
    return (
      <BookingDetailWrapper key={index}>
        <BookingInfoUL>
          <StyledLi>
            <strong>Datum:</strong> {b.date}
          </StyledLi>
          <StyledLi>
            <strong>Tid:</strong> {b.sessionstart}
          </StyledLi>
          <StyledLi>
            <strong>Antal gäster:</strong> {b.guests}
          </StyledLi>
          <StyledLi>
            <strong>Bokningsnummer:</strong> {b._id}
          </StyledLi>
        </BookingInfoUL>
        <span>
          <AdminEditButton>
            <i className="fa-regular fa-pen-to-square"></i>
          </AdminEditButton>
          <AdminEditButton>
            <i className="fa-regular fa-trash-can"></i>
          </AdminEditButton>
        </span>
      </BookingDetailWrapper>
    );
  });

  console.log(bookings);

  return (
    <>
      <AdminWrapper>
        <AdminForm>
          <H3Bold>Sök bokningsnummer</H3Bold>
          <AdminSearchBookingInput
            type="text"
            name="id"
            placeholder="00000"
            onChange={filterById}
          ></AdminSearchBookingInput>
          <SearchBookingButton onClick={handleSearch}>Sök</SearchBookingButton>
          <div>{html}</div>
        </AdminForm>
        <SearchBookingButton onClick={handleClick}>
          Hämta alla bokningar
        </SearchBookingButton>
        {show && <AdminBookingDetails></AdminBookingDetails>}
      </AdminWrapper>
    </>
  );
};
