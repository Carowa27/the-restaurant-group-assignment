import styled from "styled-components";
import errorPage from "../../assets/errorPage.png";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 84vh;
`;
export const BookingPageWrapper = styled(MainWrapper)`
  align-items: center;
  min-height: 70vh;
`;
export const ButtonWrapper = styled(MainWrapper)`
  flex-direction: row;
  justify-content: space-evenly;
  min-height: fit-content;
`;

export const InfoWrapper = styled(MainWrapper)`
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3rem;
  padding: 0;
  min-height: 80vh;
`;

export const AdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const BookingDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding: 5%;
  margin: 2%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const MyBookingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const BookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const MyEearlyBookingWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const NumberOfGuestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
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
export const DivWrapper = styled.div`
  margin-right: 40px;
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
  padding: 0 3rem;
  margin: 0;
  min-height: 60vh;
  height: fit-content;
`;
export const ContactHeadWrapper = styled(OpeningWrapper)`
  height: auto;
  min-height: fit-content;
  padding-top: 2rem;
  align-items: top;
  padding: 0;
`;
export const IceCreamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
`;
export const ContactWrapper = styled(IceCreamWrapper)`
  width: 30%;
  padding: 1rem;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;
export const FooterRow = styled(FooterColumn)`
  flex-direction: row;
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
`;

export const BookingAdminInfoWrapper = styled.div`
  display: flex;
  background-color: white;
  margin: 5%;
`;
