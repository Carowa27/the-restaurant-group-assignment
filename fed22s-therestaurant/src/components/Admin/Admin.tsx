import { BookButton, SearchBookingButton } from "../styled/Buttons";
import { AdminForm } from "../styled/Forms";
import { H1, H3Bold, H4 } from "../styled/Headings";
import { AdminSearchBookingInput, DateInput } from "../styled/Inputs";
import { AvailableTimes } from "../styled/Paragraphs";
import { AdminWrapper } from "../styled/Wrappers";

export const Admin = () => {
  /*Denna komponent ska vi kunna se bokningar och 
  här ska vi också kunna ta oss till AdminBookingDetails.tsx
  */

  return (
    <>
      <AdminWrapper>
        <H1>Estiatório Tegel</H1>
        <H3Bold>Administratör</H3Bold>
        <BookButton>Boka nytt bord</BookButton>
        <AdminForm>
          <DateInput type="date" name="date"></DateInput>
          <H3Bold>Sök bokningsnummer</H3Bold>
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
