import {
  LoaderCloudStartOne,
  LoaderCloudStartTwo,
  LoaderSunStart,
  LoadingWrapper,
} from "./styled/Loader";
import SunLoader from "../assets/SunLoader.png";
import CloudLoader from "../assets/CloudLoader.png";

export const StartLoader = () => {
  return (
    <LoadingWrapper>
      <LoaderSunStart src={SunLoader} alt="SunLoaderImage"></LoaderSunStart>
      <LoaderCloudStartOne
        src={CloudLoader}
        alt="CloudLoaderImage"
      ></LoaderCloudStartOne>
      <LoaderCloudStartTwo
        src={CloudLoader}
        alt="CloudLoaderImage"
      ></LoaderCloudStartTwo>
    </LoadingWrapper>
  );
};
