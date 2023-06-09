import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: medium;
  margin: 0.2rem;
`;

export const OpeningItalic = styled(StyledParagraph)`
  font-style: italic;
  margin-top: 1rem;
  /* padding-bottom: 5vh; */
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
  padding: 0 0.3rem;
`;
export const JobItalic = styled(OpeningItalic)`
  margin: 0.3rem 0;
  padding-bottom: 0;
`;
export const AvailableTimes = styled.p`
  font-size: 10px;
  width: 50%;
`;
