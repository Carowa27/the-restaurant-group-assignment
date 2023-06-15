import { ChangeEvent, useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import {
  deleteBooking,
  getBookings,
  updateBooking,
} from "../../services/bookingServices";
import { AdminEditButton, SearchBookingButton } from "../styled/Buttons";
import { AdminForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { AdminSearchBookingInput } from "../styled/Inputs";
import { BookingInfoUL, StyledLi } from "../styled/Lists";
import { AdminWrapper, BookingDetailWrapper } from "../styled/Wrappers";
import { AdminBookingById } from "./AdminBookingById";
import { AdminBookingDetails } from "./AdminBookingDetails";
import { Loading } from "../Loader/Loading";
import { TableData, TableHeader, TableRow } from "../styled/TableStyled";

export const Admin = () => {
  /*Denna komponent ska vi kunna se bokningar och 
  här ska vi också kunna ta oss till AdminBookingDetails.tsx
  */

  const [data, setData] = useState<IBooking[]>([]);
  const [bookings, setBookings] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  useEffect(() => {
    const getData = async () => {
      const bookings = await getBookings();
      setData(bookings);
      setBookings(bookings);
    };
    getData();
  }, []);
  const startLoadingScr = (msg: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (msg === "delete") {
        //delete function
      }
      if (msg === "update") {
        //update function
      }
      if (msg === "getAll") {
        handleClick();
      }
    }, 1000);
  };
  const filterById = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setBookings(
      data.filter(
        (d) => d._id.toString() === e.target.value || d.date === e.target.value
      )
    );
  };

  console.log(bookings);

  return (
    <>
      <AdminWrapper>
        <AdminForm>
          <H3Bold>Sök efter bokningsnummer eller datum</H3Bold>
          <AdminSearchBookingInput
            type="text"
            name="id"
            placeholder="00000"
            onChange={filterById}
          ></AdminSearchBookingInput>
          <BookingDetailWrapper>
            <table>
              <thead>
                <TableRow>
                  <TableHeader>Datum</TableHeader>
                  <TableHeader>Tid</TableHeader>
                  <TableHeader>Gäster</TableHeader>
                  <TableHeader>Bokningsnummer</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <TableRow>
                    <TableData>{b.date}</TableData>
                    <TableData>{b.sessionstart}</TableData>
                    <TableData>{b.guests}</TableData>
                    <TableData>{b._id}</TableData>
                    <TableData>
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
                            deleteBooking(b._id);
                          }}
                        >
                          <i className="fa-regular fa-trash-can"></i>
                        </AdminEditButton>
                      </span>
                    </TableData>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </BookingDetailWrapper>
        </AdminForm>
        <SearchBookingButton
          onClick={() => {
            startLoadingScr("getAll");
          }}
        >
          Hämta alla bokningar
        </SearchBookingButton>
        {show && <AdminBookingDetails></AdminBookingDetails>}
      </AdminWrapper>
      {isLoading && <Loading></Loading>}
    </>
  );
};
