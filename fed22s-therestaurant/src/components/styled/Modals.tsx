import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ModalContent = styled.div`
  /* position: relative; */
  height: 70vh;
  width: 80vw;
  background-color: aliceblue;
  padding: 2rem;
  margin: 5%;
  border-radius: 5px;
  /* margin-top: 20vh; */
  overflow-y: scroll;
  box-sizing: content-box;
`;
