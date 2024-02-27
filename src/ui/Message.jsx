import styled, { css } from "styled-components";

const Message = styled.p`
  font-size: var(--text-4);
  line-height: 1.5;

  ${(props) =>
    props.$textAlign
      ? css`
          width: 50%;
          margin-top: var(--space-6);
          text-align: center;
        `
      : css`
          width: 80%;
          margin-top: var(--space-13);
          text-align: left;
        `}
`;

export default Message;
