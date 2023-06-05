import {
  SubmitBookingButton,
  TimeBookingButton,
} from "../styled/AdminStyle/Buttons";
import { BookingForm, GuestInformationForm } from "../styled/AdminStyle/Forms";
import { H1, H2, H3 } from "../styled/AdminStyle/Headings";
import { DateInput } from "../styled/AdminStyle/Inputs";
import {
  BookingWrapper,
  DateInputWrapper,
  GuestInformationDiv,
  GuestInformationWrapper,
  NumberOfGuestWrapper,
  TimeBookingWrapper,
} from "../styled/AdminStyle/Wrappers";

export const Booking = () => {
  /*Denna komponent är för alla users, man ska kunna boka, 
    lägga till antal personer, lägga datum & tid och även 
    personlig information.
    */

  /* Todo för denna komponent:
  1. skapa funktion för att välta antal personer.
  2. skapa funktion för tidsbokning knapparna.
  */

  return (
    <>
      <BookingWrapper>
        <H1>Estiatório Tegel</H1>
        <H2>VÄLKOMMEN ATT BOKA BORD</H2>

        <BookingForm>
          <NumberOfGuestWrapper>
            <H3>VÄLJ ANTAL PERSONER</H3>
          </NumberOfGuestWrapper>
          <DateInputWrapper>
            <H3>Datum</H3>
            <DateInput type="date" name="date"></DateInput>
          </DateInputWrapper>
          <TimeBookingWrapper>
            <TimeBookingButton>18:00</TimeBookingButton>
            <TimeBookingButton>21:00</TimeBookingButton>
          </TimeBookingWrapper>
        </BookingForm>
        <GuestInformationWrapper>
          <GuestInformationForm>
            <H3>KONTAKTUPPGIFTER</H3>
            <GuestInformationDiv>
              <label htmlFor="firstname">FÖRNAMN</label>
              <input
                type="text"
                id="firstname"
                placeholder="FÖRNAMN"
                name="name"
                required
              />
              <label htmlFor="lastname">EFTERNAMN</label>
              <input
                type="text"
                id="lastname"
                placeholder="EFTERNAMN"
                name="lastname"
                required
              />
              <label htmlFor="epost">EMAIL</label>
              <input
                type="email"
                id="epost"
                placeholder="EMAIL"
                name="email"
                required
              />
              <label htmlFor="phone">MOBILTELEFON</label>
              <input
                type="tel"
                id="phone"
                placeholder="TEL -xxxxxxxxxx"
                name="phone"
                pattern="[0-9]{10}"
                required
              />
            </GuestInformationDiv>
          </GuestInformationForm>
        </GuestInformationWrapper>
        <SubmitBookingButton>Boka</SubmitBookingButton>
      </BookingWrapper>
    </>
  );
};
