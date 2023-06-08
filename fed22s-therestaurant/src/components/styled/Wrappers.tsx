import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 1rem 2rem;
  min-height: 60vh;
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
  padding: 1rem 0;
`;
export const IceCreamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContactWrapper = styled(IceCreamWrapper)`
  width: 30%;
`;
export const FastInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const FastInfoColumn = styled(FastInfoWrapper)`
  flex-direction: column;
  justify-content: flex-start;
`;
