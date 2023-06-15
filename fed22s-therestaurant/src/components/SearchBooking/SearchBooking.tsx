import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { SearchBookingButton } from "../styled/Buttons";
import { MyBookingsForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { MyBookingsSearchBookingInput } from "../styled/Inputs";
import { MyBookingsWrapper } from "../styled/Wrappers";

interface searchBookingProps {
  handleSearchBooking: (id: string) => void;
  errorMsg: boolean;
}

export const SearchBooking = ({
  handleSearchBooking,
  errorMsg,
}: searchBookingProps) => {
  const [bookingId, setBookingId] = useState("");
  const [showError, setShowError] = useState(false);
  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookingId(e.target.value);
  };
  useEffect(() => {
    setShowError(errorMsg);
  }, [errorMsg]);

  return (
    <>
      <h1>Här är din bokning </h1>
      <MyBookingsWrapper>
        <MyBookingsForm
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchBooking(bookingId.trim());
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
        {showError && (
          <p>
            Tyvärr finns ingen bokning med detta ordernummer, testa med ett
            annat!
          </p>
        )}
      </MyBookingsWrapper>
    </>
  );
};
