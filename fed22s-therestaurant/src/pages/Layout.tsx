import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainWrapper } from "../components/styled/Wrappers";

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <MainWrapper>
        <Outlet></Outlet>
      </MainWrapper>
      <Footer></Footer>
    </>
  );
};
