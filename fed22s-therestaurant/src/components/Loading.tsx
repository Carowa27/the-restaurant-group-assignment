import { LoaderCloud, LoaderSun, LoadingWrapper } from "./styled/Loader";
import SunLoader from "../assets/SunLoader.png";
import CloudLoader from "../assets/CloudLoader.png";

export const Loading = () => {
  return (
    <LoadingWrapper>
      <LoaderSun src={SunLoader} alt="SunLoaderImage"></LoaderSun>
      {/* <LoaderCloud src={CloudLoader} alt="CloudLoaderImage"></LoaderCloud> */}
    </LoadingWrapper>
  );
};
