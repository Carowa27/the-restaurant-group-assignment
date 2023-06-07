import styled from "styled-components";

export const DateInput = styled.input`
  width: 50%;
  border: 1px solid;

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
  @media screen and (min-width: 768px) {
  }
`;

export const AdminSearchBookingInput = styled.input`
  width: 50%;
  border: 1px solid black;
  padding-top: 5px;
  text-align: center;
`;
