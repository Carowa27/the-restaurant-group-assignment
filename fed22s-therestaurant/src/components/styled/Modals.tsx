import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;

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
  height: 70vh;
  width: 80vw;
  background-color: aliceblue;
  padding: 2rem;
  margin: 5%;
  border-radius: 5px;

  overflow-y: scroll;
  box-sizing: content-box;
`;
export const ModalFoot = styled(ModalHead)`
  justify-content: space-evenly;
`;

export const ModalContentWarning = styled(ModalContent)`
  width: fit-content;
  height: fit-content;
  overflow-y: hidden;
  margin-top: 40vh;
`;
export const ModalLoader = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
