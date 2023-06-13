import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUsersContext, UsersContext } from "../../contexts/UserContext";
import { IBooking } from "../../models/IBooking";
import { User } from "../../models/User";
import { createBooking, getBookings } from "../../services/bookingServices";
import { SearchBooking } from "../SearchBooking/SearchBooking";
import { SubmitBookingButton, TimeBookingButton } from "../styled/Buttons";
import { BookingForm, GuestInformationForm } from "../styled/Forms";
import { H1, H3Bold, H3Normal } from "../styled/Headings";
import { DateInput } from "../styled/Inputs";
import {
  BookingWrapper,
  DateInputWrapper,
  DivWrapper,
  GuestInformationDiv,
  GuestInformationWrapper,
  NumberOfGuestWrapper,
  TimeBookingWrapper,
} from "../styled/Wrappers";
import { Users } from "./Users";

interface IBookingProps {
  msg: string;
}
export const Booking = (props: IBookingProps) => {
  const navigate = useNavigate();
  console.log(props.msg);

  const [sittings, setSittings] = useState([
    { bookingTime: "13:00", remainingTables: 0 },
    { bookingTime: "15:00", remainingTables: 0 },
  ]);

  const MAX_AMOUNT_PER_SITTING = 6; //Max antal gäster per bord
  const MAX_AMOUNT_TABLES = 15; //Totalt antal tillgängliga bord

  const [numberOfTables, setNumberOfTables] = useState(15);

  const [bookedTables, setBookedTables] = useState(0);
  const [userInput, setUserInput] = useState(new User("", "", "", ""));
  const [user, setUser] = useState<IUsersContext>({
    users: [],
    add: (text: User) => {
      return;
    },
  });
  const [noAvailableTimes, setNoAvailableTimes] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [remainingTables, setRemainingTables] = useState(15);

  const numberOfGuestsOptions = [
    { value: 1, label: "1 person" },
    { value: 2, label: "2 personer" },
    { value: 3, label: "3 personer" },
    { value: 4, label: "4 personer" },
    { value: 5, label: "5 personer" },
    { value: 6, label: "6 personer" },
    { value: 7, label: "7 personer" },
    { value: 8, label: "8 personer" },
    { value: 9, label: "9 personer" },
    { value: 10, label: "10 personer" },
    { value: 11, label: "11 personer" },
    { value: 12, label: "12 personer" },
  ];
  const optionsMap = numberOfGuestsOptions.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  useEffect(() => {
    setButtonEnabled(!!numberOfGuests && !!selectedDate && !!selectedTime);
    if (!!numberOfGuests && !!selectedDate) {
      console.log(remainingTables, bookedTables);

      const updatedAvailableTables = sittings.map((sitting) => {
        if (sitting.remainingTables >= bookedTables) {
          return false;
        }
        return true;
      });

      if (
        updatedAvailableTables[0] === true &&
        updatedAvailableTables[1] === true
      ) {
        setNoAvailableTimes(true);
      } else {
        setNoAvailableTimes(false);
      }
    }
  }, [
    numberOfGuests,
    selectedDate,
    selectedTime,
    bookedTables,
    remainingTables,
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "firstname") {
      setUserInput({
        ...userInput,
        firstname: e.target.value,
      });
    }
    if (e.target.name === "lastname") {
      setUserInput({
        ...userInput,
        lastname: e.target.value,
      });
    }
    if (e.target.name === "email") {
      setUserInput({
        ...userInput,
        email: e.target.value,
      });
    }
    if (e.target.name === "phone") {
      setUserInput({
        ...userInput,
        phone: e.target.value,
      });
    }
  };

  const handleNumberOfGuestsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const guests = parseInt(e.target.value);
    const tables = Math.ceil(guests / MAX_AMOUNT_PER_SITTING);
    setNumberOfGuests(guests);
    setNumberOfTables(tables);
    setBookedTables(tables);
    setNoAvailableTimes(false);
  };

  const setTimes = async (date: string) => {
    const data = await getBookings();

    console.log("All", data.data);

    const dateBookings = data.data.filter(
      (booking: IBooking) => booking.date === date
    );

    // const MAX_AMOUNT_PER_TABLE = 6; // Max antal gäster per bord
    const MAX_AMOUNT_TABLES = 15; // Totalt antal tillgängliga bord

    const getRemainingTables = (sessionStart: string) => {
      const totalAvailableTables = MAX_AMOUNT_TABLES;
      const totalTakenTables = getTakenTablesFromBookings(sessionStart); // Hämta antal tagna bord från bokningar
      const remainingTables = totalAvailableTables - totalTakenTables;
      setRemainingTables(remainingTables);
      // const requiredTables = Math.ceil(numberOfGuests / MAX_AMOUNT_PER_SITTING);

      return remainingTables;
    };

    const getTakenTablesFromBookings = (sessionStart: string) => {
      return dateBookings.reduce((acc: number, booking: IBooking) => {
        if (booking.sessionstart === sessionStart) {
          const numberOfTables = Math.ceil(
            booking.guests / MAX_AMOUNT_PER_SITTING
          );
          return acc + numberOfTables;
        }
        return acc;
      }, 0);
    };

    const updatedSittings = [
      {
        bookingTime: "13:00",
        remainingTables: getRemainingTables("13:00"),
      },
      {
        bookingTime: "15:00",
        remainingTables: getRemainingTables("15:00"),
      },
    ];

    setSittings(updatedSittings);
    console.log(updatedSittings);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setTimes(e.target.value);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!buttonEnabled) return;

    const booking = {
      user: {
        firstname: userInput.firstname,
        lastname: userInput.lastname,
        email: userInput.email,
        phone: userInput.phone,
      },
      guests: numberOfGuests,
      date: selectedDate,
      sessionstart: selectedTime,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    };

    const response = await createBooking(booking);

    if (response?.status === 201) {
      // Send mail

      navigate(`/bookingconfirmed`);
    } else {
      console.error("Något gick fel vid bokningen");
    }
  };
  //updateBooking
  const getAllBookings = async () => {
    const data = await getBookings();
    console.log(data);
    return data;
  };

  //html för sökning
  //kolla id.t mot existerande objekt i listan
  //hämta all data om objektet
  //visa all data i relevanta placeholders

  // om ändra =>visa ändra knapp ist för boka
  // om create => gör inte hämtning av alla & visa boka knapp

  console.log(numberOfTables);
  console.log(bookedTables, "bookedTables");
  console.log(sittings);
  console.log(noAvailableTimes);

  return (
    <>
      <BookingWrapper>
        {props.msg === "update" && <SearchBooking></SearchBooking>}
        <H1>Estiatório Tegel</H1>
        <H3Bold>VÄLKOMMEN ATT BOKA BORD</H3Bold>
        <BookingForm onSubmit={handleSubmit}>
          <NumberOfGuestWrapper>
            <H3Normal>VÄLJ ANTAL PERSONER</H3Normal>
            <select
              name="numberOfGuests"
              value={numberOfGuests}
              // placeholder={currentGuests}
              onChange={handleNumberOfGuestsChange}
            >
              {optionsMap}
            </select>
          </NumberOfGuestWrapper>
          <DateInputWrapper>
            <H3Normal>Datum</H3Normal>
            <DateInput
              type="date"
              name="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </DateInputWrapper>
          <TimeBookingWrapper>
            {sittings.map((time) =>
              time.remainingTables >= bookedTables && !!selectedDate ? (
                <TimeBookingButton
                  key={time.bookingTime}
                  type="button"
                  onClick={() => handleTimeSelection(time.bookingTime)}
                >
                  <DivWrapper>
                    {time.remainingTables} / {MAX_AMOUNT_TABLES}
                  </DivWrapper>
                  <DivWrapper> {time.bookingTime}</DivWrapper>
                </TimeBookingButton>
              ) : null
            )}
          </TimeBookingWrapper>
          {noAvailableTimes && <p>Tyvärr finns det inga lediga tider!</p>}
        </BookingForm>
        <GuestInformationWrapper>
          <GuestInformationForm onSubmit={handleSubmit}>
            <H3Normal>KONTAKTUPPGIFTER</H3Normal>
            <UsersContext.Provider value={user}>
              <Users />
              <GuestInformationDiv>
                <label htmlFor="firstname">FÖRNAMN</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="FÖRNAMN"
                  name="firstname"
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
                <SubmitBookingButton
                  disabled={!buttonEnabled}
                  onClick={handleSubmit}
                >
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
