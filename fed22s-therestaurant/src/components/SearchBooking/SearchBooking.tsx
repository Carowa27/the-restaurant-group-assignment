import { ChangeEvent, FormEvent, useState } from "react";
import { SearchBookingButton } from "../styled/Buttons";
import { MyBookingsForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { MyBookingsSearchBookingInput } from "../styled/Inputs";
import { MyBookingsWrapper } from "../styled/Wrappers";

interface searchBookingProps {
  handleSearchBooking: (id: string) => void;
}

export const SearchBooking = ({ handleSearchBooking }: searchBookingProps) => {
  const [bookingId, setBookingId] = useState("");
  console.log("klicket funkade!");

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookingId(e.target.value);
  };

  // const handleClick = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("klicket funkade!");
  // };
  return (
    <>
      <h1>Här är din bokning </h1>
      <MyBookingsWrapper>
        <MyBookingsForm
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchBooking(bookingId);
          }}
        >
          <H3Bold>Hämta din bokning du ska ändra</H3Bold>
          <MyBookingsSearchBookingInput
            type="text"
            name="id"
            placeholder="ordernummer"
            value={bookingId}
            onChange={handleIdChange}
          ></MyBookingsSearchBookingInput>

          <SearchBookingButton type="submit">Sök</SearchBookingButton>
        </MyBookingsForm>
      </MyBookingsWrapper>
    </>
  );
};
