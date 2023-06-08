import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUsersContext, UsersContext } from "../../contexts/UserContext";
import { User } from "../../models/User";
import { BookingConfirmedPage } from "../../pages/BookingConfirmedPage";
import { getBookings } from "../../services/bookingServices";
import { SubmitBookingButton, TimeBookingButton } from "../styled/Buttons";
import { BookingForm, GuestInformationForm } from "../styled/Forms";
import { H1, H3Bold, H3Normal } from "../styled/Headings";
import { DateInput } from "../styled/Inputs";
import {
  BookingWrapper,
  DateInputWrapper,
  GuestInformationDiv,
  GuestInformationWrapper,
  NumberOfGuestWrapper,
  TimeBookingWrapper,
} from "../styled/Wrappers";

export const Booking = () => {
  const { add } = useContext(UsersContext);
  const [user, userState] = useState<IUsersContext>({
    users: [],

    add: (text: User) => {
      return;
    },
  });

  //state för input
  const [userInput, setUserInput] = useState(new User("", "", "", ""));

  useEffect(() => {
    getBookings();
  }, []);

  /*Denna komponent är för alla users, man ska kunna boka, 
    lägga till antal personer, lägga datum & tid och även 
    personlig information.
    */

  /* Todo för denna komponent:
  1. skapa funktion för att välta antal personer.
  2. skapa funktion för tidsbokning knapparna.
  */

  //test
  const navigate = useNavigate();
  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    navigate(`/bookingconfirmed`);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.firstname === "firstname") {
      setUserInput({
        ...userInput,
        firstname: e.target.value,
      });
    }
    if (e.target.lastname === "lastname") {
      setUserInput({
        ...userInput,
        lastname: e.target.value,
      });
    }
    if (e.target.email === "email") {
      setUserInput({
        ...userInput,
        email: e.target.value,
      });
    }
    if (e.target.phone === "phone") {
      setUserInput({
        ...userInput,
        phone: e.target.value,
      });
    }
  };

  const handleSubmit = () => {};

  return (
    <>
      <BookingWrapper>
        <H1>Estiatório Tegel</H1>
        <H3Bold>VÄLKOMMEN ATT BOKA BORD</H3Bold>

        <BookingForm>
          <NumberOfGuestWrapper>
            <H3Normal>VÄLJ ANTAL PERSONER</H3Normal>
          </NumberOfGuestWrapper>
          <DateInputWrapper>
            <H3Normal>Datum</H3Normal>
            <DateInput type="date" name="date"></DateInput>
          </DateInputWrapper>
          <TimeBookingWrapper>
            <TimeBookingButton>18:00</TimeBookingButton>
            <TimeBookingButton>21:00</TimeBookingButton>
          </TimeBookingWrapper>
        </BookingForm>
        <GuestInformationWrapper>
          <GuestInformationForm onSubmit={handleSubmit}>
            <H3Normal>KONTAKTUPPGIFTER</H3Normal>
            <UsersContext.Provider value={user}>
              <GuestInformationDiv>
                <label htmlFor="firstname">FÖRNAMN</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="FÖRNAMN"
                  name="name"
                  required
                  value={userInput.firstname}
                  onChange={handleChange}
                />
                <label htmlFor="lastname">EFTERNAMN</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="EFTERNAMN"
                  name="lastname"
                  required
                  value={userInput.lastname}
                  onChange={handleChange}
                />
                <label htmlFor="epost">EMAIL</label>
                <input
                  type="email"
                  id="epost"
                  placeholder="EMAIL"
                  name="email"
                  required
                  value={userInput.email}
                  onChange={handleChange}
                />
                <label htmlFor="phone">MOBILTELEFON</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="TEL -xxxxxxxxxx"
                  name="phone"
                  pattern="[0-9]{10}"
                  required
                  value={userInput.phone}
                  onChange={handleChange}
                />

                <SubmitBookingButton onClick={handleClick}>
                  Boka
                </SubmitBookingButton>
              </GuestInformationDiv>
            </UsersContext.Provider>
          </GuestInformationForm>
        </GuestInformationWrapper>
      </BookingWrapper>
    </>
  );
};
