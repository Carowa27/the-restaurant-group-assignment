import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: medium;
  margin: 0.2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const OpeningItalic = styled(StyledParagraph)`
  font-style: italic;
  margin-top: 1rem;
`;

export const ParagraphModal = styled(StyledParagraph)`
  margin: 0;
`;

export const ModalCross = styled(ParagraphModal)`
  &:hover {
    cursor: pointer;
  }
`;
export const JobParagraph = styled(StyledParagraph)`
  padding: 0 2rem;
`;

export const JobItalic = styled(OpeningItalic)`
  margin: 0.3rem 0;
  padding-bottom: 0;
`;

export const FooterParagraph = styled(StyledParagraph)`
  margin: 0;
  padding: 0.05rem 0;
  text-decoration: underline;
  color: darkgreen;
  &:hover {
    cursor: pointer;
  }
`;
