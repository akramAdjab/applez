import styled, { css } from "styled-components";

const sizes = {
  small: css`
    padding: 0.6rem var(--space-1);
    font-size: var(--text-1);
    text-transform: uppercase;
    text-align: center;
  `,
  medium: css`
    padding: var(--space-3) var(--space-5);
    font-size: var(--text-2);
  `,
  large: css`
    padding: var(--space-4) var(--space-7);
    font-size: var(--text-3);
  `,
};

const variations = {
  primary: css`
    color: var(--color-primary-50);
    border: 1px solid var(--color-primary-950);
    background-color: var(--color-primary-950);

    &:hover {
      background-color: var(--color-grey-800);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    border: 1px solid var(--color-grey-300);
    background: var(--color-primary-50);

    &:hover {
      background-color: var(--color-grey-300);
    }
  `,
  danger: css`
    color: var(--color-primary-50);
    border: 1px solid var(--color-secondary-600);
    background-color: var(--color-secondary-600);

    &:hover {
      background-color: var(--color-secondary-700);
    }
  `,
};

const Button = styled.button`
  font-weight: var(--weight-4);
  border: none;
  border-radius: var(--border-radius-sm);

  ${(props) => variations[props.$variation]}
  ${(props) => sizes[props.$size]}
`;

Button.defaultProps = {
  $variation: "primary",
  $size: "medium",
};

export default Button;
