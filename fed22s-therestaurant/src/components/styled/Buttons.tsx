import styled from "styled-components";

export const StyledButton = styled.button`
  width: 50%;
  display: flex;
  align-self: center;
  justify-content: center;
  border: none;
`;

export const BookButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  margin: 15px;
  background-color: #212524;
  color: white;
  border: none;
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
  border: none;
  width: 30%;
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
  border: none;
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
  margin: 3%;
  padding: 2%;
  border: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
`;
export const CloseModalBtn = styled.button`
  &:hover {
    cursor: pointer;
  }
`;
