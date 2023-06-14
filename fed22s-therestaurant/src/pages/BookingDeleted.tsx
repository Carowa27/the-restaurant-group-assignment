import { BookingForm } from "../components/styled/Forms";
import { BookingWrapper } from "../components/styled/Wrappers";

export const BookingDeleted = () => {
  return (
    <>
      <BookingWrapper>
        <BookingForm>
          <i className="fa-regular fa-circle-check"></i>
          <h2>Din bokning är nu borttagen!</h2>
        </BookingForm>
      </BookingWrapper>
    </>
  );
};
