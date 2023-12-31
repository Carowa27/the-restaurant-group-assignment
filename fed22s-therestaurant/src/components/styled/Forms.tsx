import styled from "styled-components";

export const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding: 5%;
  margin: 2%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const MyBookingsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  text-align: center;
  padding: 5%;
  margin: 2%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

export const BookingForm = styled.form`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1rem;

  text-align: center;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1000px) {
    width: 100%;
  }
`;

export const GuestInformationForm = styled.form`
  margin-bottom: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  background-color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  label {
    font-size: 12px;
    width: 50%;
    padding: 0.2rem;
  }

  input {
    width: 50%;
    padding: 0.2rem;
    position: relative;
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-25%);
      height: 100%;
      margin: 0;
      padding: 0;
      padding-left: 100%;

      cursor: pointer;
    }
  }
  textarea {
    width: 50%;
    height: 100px;
  }
  select {
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1000px) {
    width: 100%;
  }
`;
