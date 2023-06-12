import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUsersContext, UsersContext } from "../../contexts/UserContext";
import { IBooking } from "../../models/IBooking";
import { User } from "../../models/User";
import { getBookings } from "../../services/bookingServices";
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

export const Booking = () => {
  const navigate = useNavigate();
  const { add } = useContext(UsersContext);

  const [sittings, setSittings] = useState([
    { bookingTime: "13:00", takenSeats: 0 },
    { bookingTime: "15:00", takenSeats: 0 },
  ]);

  const MAX_AMOUNT_PER_SITTING = 90;

  const [userInput, setUserInput] = useState(new User("", "", "", ""));
  const [user, setUser] = useState<IUsersContext>({
    users: [],
    add: (text: User) => {
      return;
    },
  });

  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);
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
  });

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
    setNumberOfGuests(guests);
  };

  const setTimes = async (date: string) => {
    const data = await getBookings();

    console.log("All", data.data);

    const dateBookings = data.data.filter(
      (booking: IBooking) => booking.date === date
    );

    const getTakenSeats = (sessionStart: string) =>
      dateBookings
        .filter((booking: IBooking) => booking.sessionstart === sessionStart)
        .reduce((acc: number, booking: IBooking) => {
          return acc + Number(booking.guests);
        }, 0);

    const updatedSittings = [
      {
        bookingTime: "13:00",
        takenSeats: getTakenSeats("13:00"),
      },
      {
        bookingTime: "15:00",
        takenSeats: getTakenSeats("15:00"),
      },
    ];

    setSittings(updatedSittings);
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
      ordernumber: "3",
      guests: numberOfGuests,
      date: selectedDate,
      sessionstart: selectedTime,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    };

    try {
      const response = await fetch("http://localhost:4000/api/v1/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        navigate(`/bookingconfirmed`);
      } else {
        console.error("Något gick fel vid bokningen");
      }
    } catch (error) {
      console.error("Ett fel uppstod", error);
    }
  };

  return (
    <>
      <BookingWrapper>
        <H1>Estiatório Tegel</H1>
        <H3Bold>VÄLKOMMEN ATT BOKA BORD</H3Bold>
        <BookingForm onSubmit={handleSubmit}>
          <NumberOfGuestWrapper>
            <H3Normal>VÄLJ ANTAL PERSONER</H3Normal>
            <select
              name="numberOfGuests"
              value={numberOfGuests}
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
              time.takenSeats + numberOfGuests <= MAX_AMOUNT_PER_SITTING &&
              !!selectedDate ? (
                <TimeBookingButton
                  key={time.bookingTime}
                  type="button"
                  onClick={() => handleTimeSelection(time.bookingTime)}
                >
                  <DivWrapper>
                    {time.takenSeats} / {MAX_AMOUNT_PER_SITTING}
                  </DivWrapper>
                  <DivWrapper> {time.bookingTime}</DivWrapper>
                </TimeBookingButton>
              ) : null
            )}
          </TimeBookingWrapper>
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
                <SubmitBookingButton disabled={!buttonEnabled}>
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
