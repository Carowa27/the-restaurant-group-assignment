import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 1rem 2rem;
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
