import { ChangeEvent, FormEvent, useState } from "react";
import { SearchBookingButton } from "../styled/Buttons";
import { MyBookingsForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { MyBookingsSearchBookingInput } from "../styled/Inputs";
import { MyBookingsWrapper } from "../styled/Wrappers";

interface searchBookingProps {
  handleSearchBooking: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBooking = ({ handleSearchBooking }: searchBookingProps) => {
  const [bookingId, setBookingId] = useState("");
  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookingId(e.target.value);
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    console.log("klicket funkade !");
  };
  return (
    <>
      <h1>Här är din bokning </h1>
      <MyBookingsWrapper>
        <MyBookingsForm>
          <H3Bold>Hämta din bokning du ska ändra</H3Bold>
          <MyBookingsSearchBookingInput
            type="text"
            name="id"
            placeholder="00000"
            value={bookingId}
            onChange={handleIdChange}
            onBlur={handleSearchBooking}
          ></MyBookingsSearchBookingInput>
          <SearchBookingButton type="submit" onClick={handleClick}>
            Sök
          </SearchBookingButton>
        </MyBookingsForm>
      </MyBookingsWrapper>
    </>
  );
};
