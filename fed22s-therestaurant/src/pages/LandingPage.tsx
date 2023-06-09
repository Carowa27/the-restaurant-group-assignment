import { Icecream } from "../components/Icecream";
import { H2, H3Bold, H5 } from "../components/styled/Headings";
import {
  OpeningItalic,
  StyledParagraph,
} from "../components/styled/Paragraphs";
import {
  IceCreamWrapper,
  InfoWrapper,
  LandingWrapper,
  OpeningWrapper,
  PageWrapper,
} from "../components/styled/Wrappers";

export const LandingPage = () => {
  return (
    <PageWrapper>
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
      </LandingWrapper>
    </PageWrapper>
  );
};
