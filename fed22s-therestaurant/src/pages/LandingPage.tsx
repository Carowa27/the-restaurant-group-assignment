import { Icecream } from "../components/Icecream";
import { H2, H3Bold, H5 } from "../components/styled/Headings";
import {
  OpeningItalic,
  StyledParagraph,
} from "../components/styled/Paragraphs";
import {
  FastInfoColumn,
  FastInfoWrapper,
  IceCreamWrapper,
  InfoWrapper,
  LandingWrapper,
  OpeningWrapper,
} from "../components/styled/Wrappers";

export const LandingPage = () => {
  return (
    <LandingWrapper>
      <OpeningWrapper>
        <H2>Välkommen till Glass i Stora Lass</H2>
        <OpeningItalic>
          Vi har det bredaste utbudet av glass med smak och form som passar
          alla!
        </OpeningItalic>
      </OpeningWrapper>
      <InfoWrapper>
        <IceCreamWrapper>
          <H3Bold>Dagens Glass</H3Bold>

          <Icecream></Icecream>
        </IceCreamWrapper>
        <IceCreamWrapper>
          <H3Bold>Gästernas Favorit</H3Bold>

          <Icecream></Icecream>
        </IceCreamWrapper>
        <IceCreamWrapper>
          <H3Bold>Nyhet</H3Bold>

          <Icecream></Icecream>
        </IceCreamWrapper>
      </InfoWrapper>
      <FastInfoWrapper>
        <FastInfoColumn>
          <H5>Öppettider</H5>
          <StyledParagraph>mån-tors 10-16</StyledParagraph>
          <StyledParagraph>fre-sön 11-19</StyledParagraph>
        </FastInfoColumn>
        <FastInfoColumn>
          <H5>Snabb val</H5>
          <StyledParagraph>Våra glassar</StyledParagraph>
          <StyledParagraph>Info för allergiker</StyledParagraph>
          <StyledParagraph>Ord från tidigare gäster</StyledParagraph>
          <StyledParagraph>Frågor & Svar</StyledParagraph>
        </FastInfoColumn>
      </FastInfoWrapper>
    </LandingWrapper>
  );
};
