import { useState } from "react";
import { FooterStyled } from "./styled/FooterStyled";
import { H5 } from "./styled/Headings";
import { StyledParagraph } from "./styled/Paragraphs";
import { FooterColumn } from "./styled/Wrappers";
import { GdprModal } from "./Gdpr/GdprModal";

export const Footer = () => {
  const [showGdprModal, setShowGdprModal] = useState(false);
  const handleGdprInfo = () => {
    setShowGdprModal(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {showGdprModal ? (
        <GdprModal closeModal={() => setShowGdprModal(false)} />
      ) : (
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
            <li>Ge oss feedback</li>
            <li onClick={handleGdprInfo}>GDPR</li>
            <li>Kontakta oss</li>
          </ul>
          <FooterColumn>
            <H5>Snabb val</H5>
            <StyledParagraph>Våra glassar</StyledParagraph>
            <StyledParagraph>Kostinfo / Allergener</StyledParagraph>
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
      )}
    </>
  );
};
