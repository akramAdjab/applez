import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import styled from "styled-components";
// import Row from "./Row";

const StyledHighlights = styled.div`
  overflow: hidden;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  /* & .highlights-container {
    padding: 0 13vw;
    overflow-y: scroll;

    display: flex;
    align-items: center;
    gap: var(--space-15);
  } */

  /* & .highlights-container div {
    aspect-ratio: 16 / 9;
    height: 70rem;
    z-index: 99;

    position: relative;
  } */

  /* & video {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
    border: 1px solid #4a4a4a;
    border-radius: var(--border-radius-lg);

    display: block;
  } */

  /* & .swiper {
    
  } */

  & .swiper-wrapper {
    /* padding: 0 13vw; */
    /* gap: var(--space-15); */
  }

  & .swiper-slide {
    /* width: auto !important; */
    height: 75rem;
    /* aspect-ratio: 16 / 9; */

    position: relative;
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-lg);
  }

  & p {
    color: var(--color-primary-50);
    font-size: var(--text-5);
    line-height: 1.3;

    position: absolute;
    top: var(--space-6);
    left: var(--space-9);
  }

  /* 37.5 */
  @media only screen and (max-width: 37.5em) {
    & .swiper-slide {
      height: 50rem;
    }

    & p {
      font-size: var(--text-3);
      left: var(--space-6);
    }
  }
`;

// const StyledRow = styled(Row)`
//   margin-top: calc(var(--space-12) + var(--space-9));

//   & div:first-of-type {
//     width: 16rem;
//     height: 6rem;
//     border-radius: 20rem;
//     background-color: var(--color-grey-800);
//     opacity: 0.5;
//   }

//   & div:last-of-type {
//     width: 6rem;
//     height: 6rem;
//     border-radius: 50%;
//     background-color: var(--color-grey-800);
//     opacity: 0.5;
//   }
// `;

function Highlights() {
  const tabletQuery = window.matchMedia("(max-width: 1000px)");

  return (
    <StyledHighlights data-cursor="-hidden">
      <Swiper
        modules={[Autoplay]}
        longSwipes={true}
        spaceBetween={100}
        slidesPerView={tabletQuery ? 1.05 : 1.3}
        autoplay={true}
        centeredSlides={true}
      >
        {/* Video 01 */}
        <SwiperSlide>
          <img
            src="/assets/highlights/iPhone_15_Pro__highlight_1.jpeg"
            alt="iPhone 15 Pro"
          />

          <p role="h3">
            Enter A17 Pro.
            <br />
            Game-changing chip.
            <br />
            Groundbreaking performance.
          </p>
        </SwiperSlide>

        {/* Video 02 */}
        <SwiperSlide>
          <img
            src="/assets/highlights/iPhone_15_Pro__highlight_2.jpeg"
            alt="iPhone 15 Pro"
          />

          <p role="h3">
            Titanium.
            <br />
            So strong. So light. So Pro.
          </p>
        </SwiperSlide>

        {/* Video 03 */}
        <SwiperSlide>
          <img
            src="/assets/highlights/iPhone_15_Pro__highlight_3.jpeg"
            alt="iPhone 15 Pro"
          />

          <p role="h3">
            iPhone 15 Pro Max has the
            <br />
            longest optical zoom in
            <br />
            iPhone ever. Far out.
          </p>
        </SwiperSlide>

        {/* Video 04 */}
        <SwiperSlide>
          <img
            src="/assets/highlights/iPhone_15_Pro__highlight_4.jpeg"
            alt="iPhone 15 Pro"
          />

          <p role="h3">
            All-new Action button.
            <br />
            What will yours do?
          </p>
        </SwiperSlide>
      </Swiper>
    </StyledHighlights>
  );
}

export default Highlights;
