import { H2, H3Normal, H5 } from "../components/styled/Headings";
import {
  JobItalic,
  JobParagraph,
  StyledParagraph,
} from "../components/styled/Paragraphs";
import {
  ContactHeadWrapper,
  ContactWrapper,
  InfoWrapper,
  LandingWrapper,
} from "../components/styled/Wrappers";

export const ContactPage = () => {
  return (
    <>
      <LandingWrapper>
        <ContactHeadWrapper>
          <H2>Kontakta oss</H2>
        </ContactHeadWrapper>
        <InfoWrapper>
          <ContactWrapper>
            <H3Normal>Kontaktuppgifter</H3Normal>
            <H5>Bokning</H5>
            <StyledParagraph>08-1234567</StyledParagraph>
            <StyledParagraph>bokning@glassistoralass.se</StyledParagraph>
            <H5>Övrigt</H5>
            <StyledParagraph>08-9876543</StyledParagraph>
            <StyledParagraph>ovrigt@glassistoralass.se</StyledParagraph>
          </ContactWrapper>
          <ContactWrapper>
            <H3Normal>Vart vi finns</H3Normal>
            <H5>Glass i Stora Lass Restaurant</H5>
            <StyledParagraph>Solvägen 55, 12345 Glass Staden</StyledParagraph>
          </ContactWrapper>
          <ContactWrapper>
            <H3Normal>Jobba hos oss</H3Normal>
            <JobParagraph>
              Vill du jobba hos oss?
              <br /> Spana in jobbanonser som ligger ute just nu eller skicka en
              spontan ansökan nedan!
            </JobParagraph>
            <JobItalic>Jobb</JobItalic>
            <JobItalic>Spontan ansökan</JobItalic>
          </ContactWrapper>
        </InfoWrapper>
      </LandingWrapper>
    </>
  );
};
