import { HiArrowSmallRight } from "react-icons/hi2";
import styled, { css } from "styled-components";

import Heading from "./Heading";
import ButtonLink from "./ButtonLink";
import ShadowTitle from "./ShadowTitle";
import TitlesBox from "./TitlesBox";
import { useLocation } from "react-router-dom";

const StyledSection = styled.section`
  display: grid;
  gap: var(--space-6);

  ${(props) =>
    props.$afterhero === "true" &&
    css`
      margin-top: calc(90dvh - 7rem);
    `}

  ${(props) =>
    props.$fullHeight &&
    css`
      min-height: calc(100dvh - 7rem - 19.2rem);
      place-items: center;

      & h2 {
        width: 100%;
        line-height: 1.2;
      }
    `}

  & h2 {
    width: 100%;
  }

  @media only screen and (max-width: 21.75em) {
    & h2 {
      font-size: 8vw;
    }
  }

  /* ${(props) =>
    props.$orderPage &&
    css`
      @media only screen and (max-width: 37.5em) {
        & h2 {
          font-size: var(--space-7);
          line-height: 1.3;
        }
      }
    `} */

  /* FIXING THE PADDING BOTTOM OF HOME CATEGORIES SECTION */
  ${(props) =>
    props.$section === "Categories" &&
    css`
      padding-bottom: calc(var(--space-9) + var(--space-17)) !important;
    `}

  ${(props) =>
    props.$dark === "true" &&
    css`
      background-color: var(--color-primary-950);

      & h2,
      & p {
        color: var(--color-primary-50);
      }
    `}

  ${(props) =>
    props.$wide === "true" &&
    css`
      max-width: 100%;
    `}

  ${(props) =>
    props.$gap === "true" &&
    css`
      display: grid;
      gap: var(--space-7);
    `}

  & a:last-child {
    justify-self: center;
  }
`;

const StyledButtonLink = styled(ButtonLink)`
  margin-top: var(--space-12);
`;

function SectionWithTitle({
  afterHero,
  dark,
  wide,
  gap,
  full,
  animatedBackground,
  showProductsLink,
  shadowTitle,
  mainTitle,
  children,
  fullHeight,
}) {
  const location = useLocation();
  const orderPage = location.pathname.includes("order");

  return (
    <StyledSection
      className={`section ${!full ? "container" : ""} ${
        animatedBackground ? "animated-background" : ""
      }`}
      $section={shadowTitle}
      $fullHeight={fullHeight}
      $afterhero={afterHero}
      $dark={dark}
      $wide={wide}
      $gap={gap}
      $animatedBackground={animatedBackground}
      data-cursor={dark ? "-inverse" : ""}
      $orderPage={orderPage}
    >
      <TitlesBox>
        <ShadowTitle $dark={dark}>{shadowTitle}</ShadowTitle>
        <Heading as="h2">{mainTitle}</Heading>
      </TitlesBox>

      {children}
      {showProductsLink && (
        <StyledButtonLink to="/products">
          <span>See more products</span>
          <HiArrowSmallRight />
        </StyledButtonLink>
      )}
    </StyledSection>
  );
}

export default SectionWithTitle;
