import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { SearchBookingButton } from "../styled/Buttons";
import { MyBookingsForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { MyBookingsSearchBookingInput } from "../styled/Inputs";
import { MyBookingsWrapper } from "../styled/Wrappers";
import { ModalLoader } from "../styled/Modals";
import { Loading } from "../Loader/Loading";

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
  const [isLoading, setIsLoading] = useState(false);
  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookingId(e.target.value);
  };
  useEffect(() => {
    setShowError(errorMsg);
  }, [errorMsg]);
  const startLoadingScr = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      handleSearchBooking(bookingId.trim());
    }, 1000);
  };
  return (
    <>
      <h1>Här är din bokning </h1>
      <MyBookingsWrapper>
        <MyBookingsForm
          onSubmit={(e) => {
            e.preventDefault();
            startLoadingScr();
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

      {isLoading && <Loading></Loading>}
    </>
  );
};
