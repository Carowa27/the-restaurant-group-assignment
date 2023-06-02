import { ChangeEvent, FormEvent, useState } from "react";
import { StyledButton } from "./styled/Buttons";
import { StyledForm } from "./styled/Forms";

export const SearchAvailabilityForm = () => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const handleGuests = () => {
    if (Number(guests) > 12) {
      console.log("Ring oss för bokningar med fler än 12 gäster.");
    }
    if (guests === "" || "0") {
      console.log("Du måste välja antal gäster");
    }
    console.log(date, guests);
  };
  return (
    <>
      <h3>Bokningsinformation</h3>
      <StyledForm
        id="availability-form"
        onSubmit={(e) => (e.preventDefault(), handleGuests())}
      >
        <label htmlFor="date">Önskat datum</label>
        <input
          type="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="guest-amount">Antal gäster</label>
        <input
          type="number"
          /*min="1"
          max="12"*/
          id="guest-amount"
          placeholder="Gäster"
          onChange={(e) => setGuests(e.target.value)}
        />
        <StyledButton type="submit">Sök</StyledButton>
      </StyledForm>
    </>
  );
};
