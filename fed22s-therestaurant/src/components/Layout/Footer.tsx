import { useState } from "react";
import { FooterStyled } from "../styled/FooterStyled";
import { H5 } from "../styled/Headings";
import { FooterParagraph } from "../styled/Paragraphs";
import { FooterColumn, FooterRow } from "../styled/Wrappers";
import { GdprModal } from "../Gdpr/GdprModal";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [showGdprModal, setShowGdprModal] = useState(false);
  const handleGdprInfo = () => {
    setShowGdprModal(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {showGdprModal && (
        <GdprModal closeModal={() => setShowGdprModal(false)} />
      )}
      <FooterStyled>
        <FooterColumn>
          <H5>Öppettider</H5>
          <FooterParagraph>mån-tors 10-17</FooterParagraph>
          <FooterParagraph>fre-sön 11-19</FooterParagraph>
        </FooterColumn>
        <FooterColumn>
          <H5>Om oss</H5>
          <FooterParagraph>Om Glass i Stora Lass</FooterParagraph>
          <FooterParagraph>Våra glassar</FooterParagraph>
          <FooterParagraph>Ord från tidigare gäster</FooterParagraph>
          <FooterParagraph>
            <Link to={"/contact"}>Jobba hos oss</Link>
          </FooterParagraph>
        </FooterColumn>
        <FooterColumn>
          <H5>Kundservice</H5>
          <FooterParagraph onClick={handleGdprInfo}>GDPR</FooterParagraph>
          <FooterParagraph>Ge oss feedback</FooterParagraph>
          <FooterParagraph>Kostinfo / Allergener</FooterParagraph>
          <FooterParagraph>Frågor & Svar</FooterParagraph>
        </FooterColumn>
        <FooterColumn>
          <H5>Sociala medier</H5>
          <FooterRow>
            <FooterParagraph>
              <i className="fa-brands fa-facebook"></i>
            </FooterParagraph>
            <FooterParagraph>
              <i className="fa-brands fa-instagram"></i>
            </FooterParagraph>
            <FooterParagraph>
              <i className="fa-brands fa-twitter"></i>
            </FooterParagraph>
          </FooterRow>
          <FooterParagraph>
            <Link to={"/contact"}>Kontakta oss</Link>
          </FooterParagraph>
        </FooterColumn>
      </FooterStyled>
    </>
  );
};
