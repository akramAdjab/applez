import styled from "styled-components";

const TitlesBox = styled.div`
  margin-bottom: var(--space-12);
  text-align: center;

  position: relative;

  & h2 {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

export default TitlesBox;
