import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #bae5ff;
`;
export const LoadingWrapperSun = styled(LoadingWrapper)`
  background-color: transparent;
  /* width: 100vw;
  height: 100vh; */
`;
export const LoaderSun = styled.img`
  width: 60%;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: spinner 4.5s linear infinite;
`;
export const LoaderCloud = styled.img`
  top: 50%;
  width: 15%;
  position: absolute;
  @keyframes run {
    0% {
      left: 50%;
    }
    50% {
      left: 60%;
    }
    100% {
      left: 50%;
    }
  }

  animation: run 8s linear infinite;
`;

export const LoaderSunStart = styled.img`
  width: 20%;
  @keyframes sunSpinBig {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sunSizeBig {
    0% {
      width: 20%;
    }
    50% {
      width: 30%;
    }
    100% {
      width: 20%;
    }
  }

  animation: sunSizeBig 8s linear infinite, sunSpinBig 4.5s linear infinite;
`;
export const LoaderCloudStartOne = styled.img`
  top: 45%;
  width: 20%;
  position: absolute;
  transform: rotateY(180deg);
  @keyframes leftCloud {
    0% {
      left: 35%;
    }
    50% {
      left: 10%;
    }
    100% {
      left: 35%;
    }
  }

  animation: leftCloud 8s linear infinite;
`;
export const LoaderCloudStartTwo = styled.img`
  top: 45%;
  width: 20%;
  position: absolute;
  @keyframes rightCloud {
    0% {
      left: 45%;
    }
    50% {
      left: 70%;
    }
    100% {
      left: 45%;
    }
  }

  animation: rightCloud 8s linear infinite;
`;
