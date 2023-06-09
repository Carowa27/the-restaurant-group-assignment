import { FooterStyled } from "./styled/FooterStyled";
import { H5 } from "./styled/Headings";
import { StyledParagraph } from "./styled/Paragraphs";
import { FooterColumn } from "./styled/Wrappers";

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        <FooterColumn>
          <H5>Öppettider</H5>
          <StyledParagraph>mån-tors 10-16</StyledParagraph>
          <StyledParagraph>fre-sön 11-19</StyledParagraph>
        </FooterColumn>
        <ul>
          <H5>Om oss</H5>
          <li>Jobba hos oss</li>
          <li>Om The Restaurant</li>
          <li>Kontantfri restaurang</li>
        </ul>
        <ul>
          <H5>Kundservice</H5>
          <li>Kostinfo / Allergener</li>
          <li>Ge oss feedback</li>
          <li>Kontakta oss</li>
        </ul>
        <FooterColumn>
          <H5>Snabb val</H5>
          <StyledParagraph>Våra glassar</StyledParagraph>
          <StyledParagraph>Info för allergiker</StyledParagraph>
          <StyledParagraph>Ord från tidigare gäster</StyledParagraph>
          <StyledParagraph>Frågor & Svar</StyledParagraph>
        </FooterColumn>
        <ul>
          <H5>Sociala medier</H5>
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
