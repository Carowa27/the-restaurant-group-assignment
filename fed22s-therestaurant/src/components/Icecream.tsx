import { H3Normal } from "./styled/Headings";
import { IcecreamImg } from "./styled/Images";
import PlaceholderCruwa1 from "../assets/PlaceholderCruwa1.png";
import PlaceholderCruwa2 from "../assets/PlaceholderCruwa2.png";
import PlaceholderCruwa3 from "../assets/PlaceholderCruwa3.png";

export const Icecream = () => {
  const x = Math.floor(Math.random() * 3 + 1);
  let imgsrc = "";
  let imgalt = "";
  if (x === 1) {
    imgsrc = PlaceholderCruwa1;
    imgalt = "Nougatglass";
  }
  if (x === 2) {
    imgsrc = PlaceholderCruwa2;
    imgalt = "Chokladglass";
  }
  if (x === 3) {
    imgsrc = PlaceholderCruwa3;
    imgalt = "Snurrglass";
  }

  return (
    <>
      <IcecreamImg src={imgsrc} alt={imgalt} />
      <H3Normal>{imgalt}</H3Normal>
    </>
  );
};
