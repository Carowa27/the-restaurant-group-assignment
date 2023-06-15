import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainWrapper } from "../styled/Wrappers";
import { useEffect, useState } from "react";
import { StartLoader } from "../Loader/StartLoader";

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
