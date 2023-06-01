import { FooterStyled } from "./styled/FooterStyled";

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        <ul>
          <h3>Om oss</h3>
          <li>Jobba hos oss</li>
          <li>Om The Restaurant</li>
          <li>Kontantfri restaurang</li>
        </ul>
        <ul>
          <h3>Kundservice</h3>
          <li>Kostinfo / Allergener</li>
          <li>Ge oss feedback</li>
          <li>Kontakta oss</li>
        </ul>
        <ul>
          <h3>Policys</h3>
          <li>Personuppgifter</li>
          <li>Cookies</li>
          <li>Gdpr</li>
        </ul>
        <ul>
          <h3>Sociala medier</h3>
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
        </ul>
      </FooterStyled>
    </>
  );
};
