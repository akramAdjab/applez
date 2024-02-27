import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonLink = styled(Link)`
  ${(props) =>
    props.lightcolor === "true"
      ? css`
          color: var(--color-primary-300);
        `
      : css`
          color: var(--color-primary-700);
        `}

  display: flex;
  gap: 4px;

  &:hover {
    gap: var(--space-1);
  }
`;

export default ButtonLink;
