import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainWrapper } from "../components/styled/Wrappers";
import { useEffect, useState } from "react";
import { StartLoader } from "../components/StartLoader";

export const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <StartLoader />
      ) : (
        <>
          <Header></Header>
          <MainWrapper>
            <Outlet></Outlet>
          </MainWrapper>
          <Footer></Footer>
        </>
      )}
    </>
  );
};
