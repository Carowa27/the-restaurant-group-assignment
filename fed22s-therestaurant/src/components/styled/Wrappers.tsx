import styled from "styled-components";
import errorPage from "../../assets/errorPage.png";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 2rem 1rem 2rem; */
  /* min-height: 60vh; */
`;
export const PageWrapper = styled(MainWrapper)`
  margin-bottom: 10rem; /*footer*/
`;
export const InfoWrapper = styled(MainWrapper)`
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3rem;
`;

export const AdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const BookingWrapper = styled.div`
  /* background-color: #859685; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const NumberOfGuestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const AmountGuestsNumberWrapper = styled.div`
  width: 14%;
  border: 1px solid black;
  border-radius: 2px;
  padding: 0.4rem 0;
  text-align: center;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

export const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const TimeBookingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem 0;
`;

export const GuestInformationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem 0;
`;

export const GuestInformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OpeningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 85vh;
`;
export const IceCreamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
`;
export const ContactWrapper = styled(IceCreamWrapper)`
  width: 30%;
`;
// export const FastInfoWrapper = styled.div`
//   display: flex;
//   justify-content: space-evenly;
// `;
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 1rem;
`;
export const FooterRow = styled(FooterColumn)`
  flex-direction: row;
  /* justify-content: space-evenly; */
  gap: 1rem;
  padding-top: 0;
  padding: 0.5rem 0;
`;
export const ErrorWrapper = styled(MainWrapper)`
  justify-content: center;
  align-items: center;
  background-image: url(${errorPage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding: 0;
  height: 100vh;
  width: 100%;
  /* top: 0;
  left: 0; */
`;
