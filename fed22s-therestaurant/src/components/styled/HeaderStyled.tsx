import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1%;
  justify-content: center;

  h2 {
    display: flex;
    justify-content: center;
  }

  #logo {
    border-radius: 50%;
    width: 150px;
    margin: 1%;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
  }
`;
