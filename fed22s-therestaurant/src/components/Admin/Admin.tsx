import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IBooking } from "../../models/IBooking";
import { getBookings } from "../../services/bookingServices";
import { SearchBookingButton } from "../styled/Buttons";
import { AdminForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { AdminSearchBookingInput, DateInput } from "../styled/Inputs";
import { BookingInfoUL } from "../styled/UnorderdLists";
import { AdminWrapper, BookingAdminInfoWrapper } from "../styled/Wrappers";
import { AdminBookingDetails } from "./AdminBookingDetails";

export const Admin = () => {
  /*Denna komponent ska vi kunna se bokningar och 
  här ska vi också kunna ta oss till AdminBookingDetails.tsx
  */

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      <AdminWrapper>
        <AdminForm>
          <H3Bold>Sök bokningsnummer</H3Bold>
          <AdminSearchBookingInput
            type="text"
            name="id"
            placeholder="00000"
          ></AdminSearchBookingInput>
          <SearchBookingButton>Sök</SearchBookingButton>

          {/* <H4>Viktig information</H4>
          <AvailableTimes>
            15 bord för sex personer vid varje bord. Restaurangen har två
            sittningar varje kväll, en klockan 18:00 och en klockan 21:00. Detta
            innebär att samtliga bord bör gå att boka två gånger per kväll.
          </AvailableTimes> */}
        </AdminForm>
        <SearchBookingButton onClick={handleClick}>
          Hämta alla bokningar
        </SearchBookingButton>
        {show && <AdminBookingDetails></AdminBookingDetails>}
      </AdminWrapper>
    </>
  );
};
