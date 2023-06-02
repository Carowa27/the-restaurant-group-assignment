import { CreateNewBooking } from "../components/CreateNewBooking";
import { SearchAvailabilityForm } from "../components/SearchAvailabilityForm";
import { SittingForm } from "../components/SittingForm";
import { InfoWrapper } from "../components/styled/Wrappers";

export const BookingPage = () => {
  return (
    <>
      <h2>Boka bord</h2>
      <InfoWrapper>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SearchAvailabilityForm></SearchAvailabilityForm>
          <SittingForm></SittingForm>
        </section>
        <section>
          <CreateNewBooking></CreateNewBooking>
        </section>
        {/*<form> <input type="text" placeholder="Förnamn" />
        <input type="text" placeholder="Efternamn" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Telefonnummer" /> 
      </form>*/}
      </InfoWrapper>
    </>
  );
};
