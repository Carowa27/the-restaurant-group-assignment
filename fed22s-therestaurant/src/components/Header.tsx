import { Link } from "react-router-dom";
import { HeaderStyled } from "./styled/HeaderStyled";
import { H3Bold, NavLi } from "./styled/Headings";
import logo from "../assets/glasslogo2.png";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <img src={logo} alt="Logga med glass i mitten" id="logo" />
          <ul>
            <NavLi>
              <Link to="/">Hem</Link>
            </NavLi>
            <NavLi>
              <Link to="/booking">Bokning</Link>
            </NavLi>
            <NavLi>
              <Link to="/contact">Kontakt</Link>
            </NavLi>
            <NavLi>
              <Link to="/admin">Admin</Link>
            </NavLi>
          </ul>
        </nav>
      </HeaderStyled>
    </>
  );
};
