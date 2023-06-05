import { ChangeEvent, FormEvent, useState } from "react";
import { StyledButton } from "./styled/Buttons";
import { StyledForm } from "./styled/Forms";
import { SittingForm } from "./SittingForm";

export const SearchAvailabilityForm = () => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  let toManyGuests = false;
  const [noGuests, setNoGuests] = useState(false);
  const [noDate, setNoDate] = useState(false);
  // let [availablesittings, setAvailablesittings] = useState(false);
  let availablesittings = false;
  if (Number(guests) > 12) {
    toManyGuests = true;
  }
  if (date != "" && Number(guests) != 0 && Number(guests) <= 12) {
    availablesittings = true;
  }
  const handleGuests = () => {
    if (guests === "" || "0") {
      console.log("Du måste välja antal gäster");
      setNoGuests(true);
    } else setNoGuests(false);
    if (date === "" || null) {
      console.log("Du måste välja datum");
      setNoDate(true);
    } else setNoDate(false);
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
          min="1"
          max="12"
          id="guest-amount"
          placeholder="Gäster"
          onChange={(e) => setGuests(e.target.value)}
        />
        <StyledButton type="submit">Sök</StyledButton>
        {noDate && (
          <p style={{ width: "80%", margin: 0, padding: "0 0.2rem" }}>
            Du måste välja datum
          </p>
        )}
        {noGuests && (
          <p style={{ width: "80%", margin: 0, padding: "0 0.2rem" }}>
            Du måste välja antal gäster
          </p>
        )}
        {toManyGuests && (
          <p style={{ width: "80%", margin: 0, padding: "0 0.2rem" }}>
            Ring oss för bokningar med fler än 12 gäster.
          </p>
        )}
        {availablesittings && <SittingForm></SittingForm>}
      </StyledForm>
    </>
  );
};
