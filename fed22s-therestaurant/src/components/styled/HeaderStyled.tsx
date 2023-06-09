import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  /* background: 0; */
  padding: 1%;
  justify-content: center;
  /* align-self: flex-start; */
  top: 0;

  h2 {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
  }
`;
