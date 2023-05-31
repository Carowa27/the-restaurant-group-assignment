import { Link } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/booking">Bokning</Link>
            </li>
            <li>
              <Link to="contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
