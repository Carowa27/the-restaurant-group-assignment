import { ChangeEvent, FormEvent, useState } from "react";
import { SearchBookingButton } from "../styled/Buttons";
import { MyBookingsForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { MyBookingsSearchBookingInput } from "../styled/Inputs";
import { MyBookingsWrapper } from "../styled/Wrappers";

interface searchBookingProps {
  handleSubmitUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBooking = ({ handleSubmitUpdate }: searchBookingProps) => {
  const [bookingId, setBookingId] = useState("");
  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookingId(e.target.value);
  };
  return (
    <>
      <h1>Här är din bokning </h1>
      <MyBookingsWrapper>
        <MyBookingsForm>
          <H3Bold>Hämta din bokning du ska ändra</H3Bold>
          <MyBookingsSearchBookingInput
            //denna input ska ge userGivenId till Bookings
            type="text"
            name="id"
            placeholder="00000"
            value={bookingId}
            onChange={handleIdChange}
            onBlur={handleSubmitUpdate}
          ></MyBookingsSearchBookingInput>
          <SearchBookingButton>Sök</SearchBookingButton>
        </MyBookingsForm>
      </MyBookingsWrapper>
    </>
  );
};
