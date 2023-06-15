import { Link } from "react-router-dom";
import { HeaderStyled } from "../styled/HeaderStyled";
import { NavLi } from "../styled/Lists";
import logo from "../../assets/glasslogo2.png";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <Link to="/">
            <img src={logo} alt="Logga med glass i mitten" id="logo" />
          </Link>
          <ul>
            <NavLi>
              <Link to="/booking">Bokning</Link>
            </NavLi>
            <NavLi>
              <Link to="/contact">Kontakt</Link>
            </NavLi>
          </ul>
        </nav>
      </HeaderStyled>
    </>
  );
};
