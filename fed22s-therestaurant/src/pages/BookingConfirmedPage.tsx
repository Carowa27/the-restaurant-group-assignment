import { BookingForm } from "../components/styled/Forms";
import { BookingWrapper } from "../components/styled/Wrappers";

export const BookingConfirmedPage = () => {
  return (
    <>
      <BookingWrapper>
        <BookingForm>
          <i className="fa-regular fa-circle-check"></i>
          <h2>Tack för din bokning!</h2>
        </BookingForm>
      </BookingWrapper>
    </>
  );
};
