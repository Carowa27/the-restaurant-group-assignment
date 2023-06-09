import { Link } from "react-router-dom";
import { HeaderStyled } from "./styled/HeaderStyled";
import { H3Bold } from "./styled/Headings";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <H3Bold>Glass i Stora Lass</H3Bold>
              </Link>
            </li>
            <li>
              <Link to="/booking">Bokning</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </HeaderStyled>
    </>
  );
};
