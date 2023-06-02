import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #ff5e78;
  display: flex;
  flex-direction: column;
  padding: 0 2rem 1rem 2rem;
`;
export const InfoWrapper = styled(MainWrapper)`
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3rem;
`;
