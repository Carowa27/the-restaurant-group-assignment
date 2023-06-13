import { SearchBookingButton } from "../styled/Buttons";
import { MyBookingsForm } from "../styled/Forms";
import { H3Bold } from "../styled/Headings";
import { MyBookingsSearchBookingInput } from "../styled/Inputs";
import { MyBookingsWrapper } from "../styled/Wrappers";

export const MyBookings = () => {
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
          ></MyBookingsSearchBookingInput>
          <SearchBookingButton>Sök</SearchBookingButton>
        </MyBookingsForm>
      </MyBookingsWrapper>
    </>
  );
};
