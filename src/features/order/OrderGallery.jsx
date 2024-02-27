import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import styled from "styled-components";

const StyledOrderGallery = styled.div`
  width: 100%;
  overflow: hidden;

  align-self: start;

  position: sticky;
  top: var(--space-5);
  left: 0;

  & img {
    width: 100%;
    /* max-height: 70rem; */
    aspect-ratio: 2.5/4;
  }

  @media only screen and (max-width: 56.25em) {
    & {
      position: static;
    }

    /* & img {
      aspect-ratio: 1;
    } */
    & img {
      aspect-ratio: 3.5/4;
    }
  }

  /* Overwriting the Swiper styles */
  & .swiper-slide {
    border-radius: var(--border-radius-lg);
    overflow: hidden;
  }

  /* Overwriting the Swiper styles for the pagination */
  & .swiper-pagination-bullet-active {
    background-color: var(--color-grey-950);
    opacity: 1;
  }

  /* Overwriting the Swiper styles for the navigation */
  & .swiper-button-prev,
  & .swiper-button-next {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: var(--color-grey-200-light);

    display: grid;
    place-items: center;
  }

  & .swiper-button-prev::after,
  & .swiper-button-next::after {
    color: var(--color-grey-950);
    font-size: var(--text-3);
  }

  & .swiper-button-prev::after {
    margin-right: 3px;
  }

  & .swiper-button-next::after {
    margin-left: 3px;
  }

  & .swiper-button-disabled {
    cursor: not-allowed;
    pointer-events: auto;
    opacity: 0.1;
  }

  @media only screen and (max-width: 31.25em) {
    & img {
      aspect-ratio: 3/4;
    }

    & .swiper-button-prev,
    & .swiper-button-next {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: var(--color-grey-200-light);

      display: grid;
      place-items: center;
    }
  }
`;

function OrderGallery({ items }) {
  const mediaQuery = window.matchMedia("(max-width: 56.25em)");
  const smallScreens = mediaQuery.matches;

  if (items.length === 1)
    return (
      <StyledOrderGallery>
        <Swiper slidesPerView={1} centeredSlides={true}>
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image.url} alt={item.product_name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledOrderGallery>
    );

  return (
    <StyledOrderGallery>
      <Swiper
        modules={[Pagination, Navigation, EffectCoverflow]}
        pagination={{ clickable: true }}
        navigation
        longSwipes={true}
        grabCursor={true}
        slidesPerView={smallScreens ? 1 : 1.25}
        // slidesPerView={1.25}
        spaceBetween={96}
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image.url} alt={item.product_name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledOrderGallery>
  );
}

export default OrderGallery;
