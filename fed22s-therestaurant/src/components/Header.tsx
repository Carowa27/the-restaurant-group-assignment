import { Link } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { HeaderStyled } from "./styled/HeaderStyled";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <h2>The Restaurant</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/booking">Bokning</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </HeaderStyled>
    </>
  );
};
