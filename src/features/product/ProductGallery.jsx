import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styled from "styled-components";

const ImgsContainer = styled.div`
  align-self: start;

  display: flex;
  border-radius: var(--border-radius-lg);
  overflow: hidden;

  position: sticky;
  top: var(--space-5);

  @media only screen and (max-width: 50em) {
    & {
      position: static;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  & img {
    width: 100%;
    border-radius: var(--border-radius-lg);
    aspect-ratio: 3.5 / 3;
    /* aspect-ratio: 1; */
  }

  @media only screen and (max-width: 25em) {
    & img {
      height: auto;
      aspect-ratio: 1;
    }
  }

  /* Overwriting the Swiper styles for the pagination */
  & .swiper-pagination-bullet-active {
    background-color: var(--color-grey-950);
    opacity: 1;
  }

  /* Overwriting the Swiper styles for the navigation */
  & .swiper-button-prev::after,
  & .swiper-button-next::after {
    color: var(--color-grey-950);
    font-size: var(--text-6);
  }

  @media only screen and (max-width: 31.25em) {
    & .swiper-button-prev::after,
    & .swiper-button-next::after {
      font-size: var(--text-4);
    }
  }

  & .swiper-button-disabled {
    cursor: not-allowed;
    pointer-events: auto;
  }
`;

function ProductGallery({ name, variants, imgsIndex, assets }) {
  const colorVariants = variants.find((variant) => variant.name === "Color");
  const assetsArray = colorVariants.options
    .at(imgsIndex)
    .assets.map((img) => assets.filter((asset) => asset.id === img))
    .flat();

  return (
    <ImgsContainer>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        longSwipes={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
      >
        {assetsArray.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.url} alt={name} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImgsContainer>
  );
}

export default ProductGallery;
