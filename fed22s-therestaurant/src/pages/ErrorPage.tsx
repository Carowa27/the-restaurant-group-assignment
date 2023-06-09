import { H2, H3Normal } from "../components/styled/Headings";
import { ErrorWrapper } from "../components/styled/Wrappers";

export const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <H2>Something went wrong</H2>
      <H3Normal>Please try again</H3Normal>
    </ErrorWrapper>
  );
};
