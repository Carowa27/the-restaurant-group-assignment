import { LoaderCloud, LoaderSun, LoadingWrapperSun } from "./styled/Loader";
import SunLoader from "../assets/SunLoader.png";
import CloudLoader from "../assets/CloudLoader.png";
import { ModalLoader } from "./styled/Modals";

export const Loading = () => {
  return (
    <ModalLoader>
      <LoadingWrapperSun>
        <LoaderSun src={SunLoader} alt="SunLoaderImage"></LoaderSun>
        {/* <LoaderCloud src={CloudLoader} alt="CloudLoaderImage"></LoaderCloud> */}
      </LoadingWrapperSun>
    </ModalLoader>
  );
};
