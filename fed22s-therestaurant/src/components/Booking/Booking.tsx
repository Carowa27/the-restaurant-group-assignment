import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IBooking } from "../../models/IBooking";
import { User } from "../../models/User";
import {
  createBooking,
  getBookingById,
  getBookings,
  updateBooking,
} from "../../services/bookingServices";
import { BookingConfirmation } from "./BookingConfirmation";
import { SearchBooking } from "./SearchBooking";
import { SubmitBookingButton, TimeBookingButton } from "../styled/Buttons";
import { BookingForm, GuestInformationForm } from "../styled/Forms";
import { H3Bold, H3Normal } from "../styled/Headings";
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
import { Loading } from "../Loader/Loading";

interface IBookingProps {
  msg: string;
}

export const Booking = (props: IBookingProps) => {
  const navigate = useNavigate();

  const [sittings, setSittings] = useState([
    { bookingTime: "13:00", remainingTables: 0 },
    { bookingTime: "15:00", remainingTables: 0 },
  ]);

  const [bookedTables, setBookedTables] = useState(0);
  const [userInput, setUserInput] = useState(new User("", "", "", ""));
  const [noAvailableTimes, setNoAvailableTimes] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [remainingTables, setRemainingTables] = useState(15);
  const [showError, setShowError] = useState(false);
  const [gdpr, setGdpr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showGuestInformation, setShowGuestInformation] = useState(false);

  const MAX_AMOUNT_PER_SITTING = 6;
  const MAX_AMOUNT_TABLES = 15;

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
    setBookedTables(tables);
    setNoAvailableTimes(false);
  };

  const setTimes = async (date: string) => {
    const data = await getBookings();
    const dateBookings = data.filter(
      (booking: IBooking) => booking.date === date
    );

    const getRemainingTables = (sessionStart: string) => {
      const totalTakenTables = getTakenTablesFromBookings(sessionStart);
      const remainingTables = MAX_AMOUNT_TABLES - totalTakenTables;
      setRemainingTables(remainingTables);
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
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setTimes(e.target.value);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    setShowGuestInformation(true);
  };

  const handleGdpr = (e: ChangeEvent<HTMLInputElement>) => {
    setGdpr(e.target.checked);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!buttonEnabled) return;

    const booking: IBooking = {
      user: {
        firstname: userInput.firstname,
        lastname: userInput.lastname,
        email: userInput.email,
        phone: userInput.phone,
      },
      guests: numberOfGuests,
      date: selectedDate,
      sessionstart: selectedTime,
      _id: "",
    };

    const response = await createBooking(booking);

    if (response?.status === 201) {
      // Send mail
      navigate(`/bookinginfo/confirm/${response.data?._id}`);
    } else {
      console.error("Något gick fel vid bokningen");
    }
  };

  const [userBooking, setUserBooking] = useState<IBooking>();
  let userGivenId = "";
  const handleSearchBooking = async (id: string) => {
    userGivenId = id;

    const getUserBookingById = async () => {
      try {
        const data = await getBookingById(userGivenId);
        setUserBooking(data);
        if (data === undefined) {
          setShowError(true);
        } else {
          setShowError(false);
        }
      } catch (error) {
        console.error(`${error}: Något gick fel vid sökningen`);
      }
    };
    getUserBookingById();
  };

  const handleSubmitChangeBooking = async (e: FormEvent) => {
    e.preventDefault();
    if (!buttonEnabled) return;

    const updatededBooking = {
      user: {
        firstname: userInput.firstname,
        lastname: userInput.lastname,
        email: userInput.email,
        phone: userInput.phone,
      },
      guests: numberOfGuests,
      date: selectedDate,
      sessionstart: selectedTime,
      updatedAt: new Date().toISOString(),
    };

    const response = await updateBooking(userBooking?._id, updatededBooking);
    if (response?.status === 204) {
      // Send mail

      navigate(`/bookinginfo/update/${userBooking?._id}`);
    } else {
      console.error("Något gick fel vid bokningen");
    }
  };

  const startLoadingScr = (e: FormEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (props.msg === "updatePage") {
        handleSubmitChangeBooking(e);
      }
      if (props.msg === "createPage") {
        handleSubmit(e);
      }
    }, 1000);
  };

  return (
    <>
      <BookingWrapper>
        {props.msg === "updatePage" && userBooking === null ? (
          <></>
        ) : (
          <>
            {props.msg === "updatePage" && (
              <SearchBooking
                handleSearchBooking={handleSearchBooking}
                errorMsg={showError}
              ></SearchBooking>
            )}
            {userBooking != null && (
              <BookingConfirmation
                userBooking={userBooking}
                msg={props.msg}
              ></BookingConfirmation>
            )}
            {userBooking != null && (
              <>
                <H3Bold>ÄNDRA BOKNING</H3Bold>
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
                      time.remainingTables >= bookedTables && !!selectedDate ? (
                        <TimeBookingButton
                          key={time.bookingTime}
                          type="button"
                          onClick={() => handleTimeSelection(time.bookingTime)}
                        >
                          {/* <DivWrapper>
                            {time.remainingTables} / {MAX_AMOUNT_TABLES}/
                          </DivWrapper> */}
                          <DivWrapper> {time.bookingTime}</DivWrapper>
                        </TimeBookingButton>
                      ) : null
                    )}
                  </TimeBookingWrapper>
                  {noAvailableTimes && (
                    <p>Tyvärr finns det inga lediga tider!</p>
                  )}
                </BookingForm>

                {showGuestInformation && (
                  <GuestInformationWrapper>
                    <GuestInformationForm
                      onSubmit={(e) => startLoadingScr(e)} /*{handleSubmit}*/
                    >
                      <H3Normal>KONTAKTUPPGIFTER</H3Normal>

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

                        <label htmlFor="gdpr">
                          Jag har läst och accepterar GDPR
                        </label>
                        <input
                          id="gdpr"
                          type="checkbox"
                          checked={gdpr}
                          onChange={handleGdpr}
                          required
                        />
                        <SubmitBookingButton disabled={!buttonEnabled}>
                          Ändra
                        </SubmitBookingButton>
                      </GuestInformationDiv>
                    </GuestInformationForm>
                  </GuestInformationWrapper>
                )}
              </>
            )}
          </>
        )}

        {props.msg === "createPage" ? (
          <>
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
                  time.remainingTables >= bookedTables && !!selectedDate ? (
                    <TimeBookingButton
                      key={time.bookingTime}
                      type="button"
                      onClick={() => handleTimeSelection(time.bookingTime)}
                    >
                      {/* <DivWrapper>
                        {time.remainingTables} / {MAX_AMOUNT_TABLES}
                      </DivWrapper> */}
                      <DivWrapper> {time.bookingTime}</DivWrapper>
                    </TimeBookingButton>
                  ) : null
                )}
              </TimeBookingWrapper>
              {noAvailableTimes && <p>Tyvärr finns det inga lediga tider!</p>}
            </BookingForm>

            {showGuestInformation && (
              <GuestInformationWrapper>
                <GuestInformationForm onSubmit={handleSubmit}>
                  <H3Normal>KONTAKTUPPGIFTER</H3Normal>

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
                    <label htmlFor="gdpr">
                      Jag har läst och accepterar GDPR
                    </label>
                    <input
                      id="gdpr"
                      type="checkbox"
                      checked={gdpr}
                      onChange={handleGdpr}
                      required
                    />
                    <SubmitBookingButton
                      disabled={!buttonEnabled}
                      onClick={(e) => {
                        startLoadingScr(e);
                      }}
                    >
                      Boka
                    </SubmitBookingButton>
                  </GuestInformationDiv>
                </GuestInformationForm>
              </GuestInformationWrapper>
            )}
          </>
        ) : (
          <></>
        )}
      </BookingWrapper>
      {isLoading && <Loading></Loading>}
    </>
  );
};
