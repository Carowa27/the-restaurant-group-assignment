import { BookButton, SearchBookingButton } from "../styled/AdminStyle/Buttons";
import { AdminForm } from "../styled/AdminStyle/Forms";
import { H1, H2, H4 } from "../styled/AdminStyle/Headings";
import {
  AdminSearchBookingInput,
  DateInput,
} from "../styled/AdminStyle/Inputs";
import { AvailableTimes } from "../styled/AdminStyle/Paragraph";
import { AdminWrapper } from "../styled/AdminStyle/Wrappers";

export const Admin = () => {
  /*Denna komponent ska vi kunna se bokningar och 
  här ska vi också kunna ta oss till AdminBookingDetails.tsx
  */

  return (
    <>
      <AdminWrapper>
        <H1>Estiatório Tegel</H1>
        <H2>Administratör</H2>
        <BookButton>Boka nytt bord</BookButton>
        <AdminForm>
          <DateInput type="date" name="date"></DateInput>
          <H2>Sök bokningsnummer</H2>
          <AdminSearchBookingInput
            type="text"
            name="id"
            placeholder="00000"
          ></AdminSearchBookingInput>
          <SearchBookingButton>Sök</SearchBookingButton>

          <H4>Viktig information</H4>
          <AvailableTimes>
            15 bord för sex personer vid varje bord. Restaurangen har två
            sittningar varje kväll, en klockan 18:00 och en klockan 21:00. Detta
            innebär att samtliga bord bör gå att boka två gånger per kväll.
          </AvailableTimes>
        </AdminForm>
      </AdminWrapper>
    </>
  );
};
