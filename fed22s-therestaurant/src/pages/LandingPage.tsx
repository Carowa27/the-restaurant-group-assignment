import { Link } from "react-router-dom";
import { Icecream } from "../components/Icecream";
import { H2, H3Bold } from "../components/styled/Headings";
import { OpeningItalic } from "../components/styled/Paragraphs";
import {
  IceCreamWrapper,
  InfoWrapper,
  LandingWrapper,
  OpeningWrapper,
} from "../components/styled/Wrappers";
import { useState } from "react";
import icecreamImg from "../assets/PlaceholderCruwa4.png";
import { IcecreamClicker } from "../components/styled/Images";

export const LandingPage = () => (
  /* const [icecreamImg] = useState(buttonBackgroundImg);*/ <LandingWrapper>
    <OpeningWrapper>
      <H2>Välkommen till Glass i Stora Lass</H2>
      <IcecreamClicker src={icecreamImg} alt="icecreamImg" />
      <OpeningItalic>
        Vi har det bredaste utbudet av glass med smak och form som passar alla!
        <Link to={"/booking"}> Är du sugen på glass, kom och boka här!</Link>
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
);
