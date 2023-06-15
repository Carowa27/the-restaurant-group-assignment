import { StyledButton } from "./styled/Buttons";
import { StyledForm } from "./styled/Forms";
import { CreateBookingInput } from "./styled/Inputs";

export const CreateNewBooking = () => {
  return (
    <>
      <h3>Dina uppgifter</h3>
      <StyledForm id="availability-form">
        <label htmlFor="firstname">Förnamn</label>
        <CreateBookingInput type="text" id="firstname" />
        <label htmlFor="lastname">Efternamn</label>
        <CreateBookingInput type="text" id="lastname" />
        <label htmlFor="email">Email</label>
        <CreateBookingInput type="email" id="email" />
        <label htmlFor="phonenumber">Telefonnummer</label>
        <CreateBookingInput type="tel" id="phonenumber" />
        <div style={{ display: "flex", gap: "0.3rem" }}>
          <input type="checkbox" id="gdpr-approval" />
          <label htmlFor="gdpr-approval">
            Jag godkänner att mina uppgifter sparas
          </label>
        </div>
        <StyledButton>Spara bokning</StyledButton>
      </StyledForm>
    </>
  );
};
