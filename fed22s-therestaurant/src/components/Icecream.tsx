import { H3Normal } from "./styled/Headings";
import { IcecreamImg } from "./styled/Images";
import PlaceholderCruwa from "../assets/PlaceholderCruwa.png";

export const Icecream = () => {
  return (
    <>
      <IcecreamImg src={PlaceholderCruwa} alt="PlaceholderImg" />
      <H3Normal>Icecream Name</H3Normal>
    </>
  );
};
