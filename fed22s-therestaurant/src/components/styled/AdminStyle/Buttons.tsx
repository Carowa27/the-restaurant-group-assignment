import styled from "styled-components";

export const BookButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  margin: 15px;
  background-color: #212524;
  color: white;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
`;

export const SearchBookingButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  margin: 15px;
  background-color: black;
  color: white;
  border-radius: 45%;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
`;

export const TimeBookingButton = styled.button`
  display: flex;
  padding: 15px;
  margin: 10px;
  background-color: black;
  color: white;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
`;

export const SubmitBookingButton = styled.button`
  width: 250px;
  background-color: black;
  color: white;
  border-radius: 2px;
  transition: all 0.1s linear;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
`;
