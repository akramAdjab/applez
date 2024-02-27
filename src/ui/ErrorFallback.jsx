import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

import Heading from "./Heading";

const StyledErrorFallback = styled.main`
  height: 100vh;
  padding: var(--space-12);
  background-color: var(--color-primary-50);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  /* Box */
  padding: var(--space-12);
  text-align: center;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);

  flex: 0 1 96rem;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    color: var(--color-primary-500);
    margin-bottom: var(--space-9);
    font-family: "Inter";
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">Something went wrong 🧐</Heading>
          <p>{error.message}</p>

          <button onClick={resetErrorBoundary}>Try again</button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
