// import { motion, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const StyledGallery = styled.div`
  height: 90dvh;
  /* height: calc(9 * 50dvh); */
  /* padding: 0 var(--space-6); */
  overflow-x: scroll;

  position: relative;

  & div {
    /* height: 90vh; */
    height: 100%;
    overflow-x: scroll;
    padding: 0 var(--space-6);

    position: sticky;
    top: var(--space-12);
    left: 0;

    display: grid;
    grid-template-columns: repeat(9, 50vh);
    grid-template-rows: repeat(2, calc(90vh / 2 - (var(--space-6) / 2)));
    gap: var(--space-6);

    @media only screen and (max-width: 43.75em) {
      & {
        height: 70dvh;
        grid-template-columns: repeat(9, 40vh);
        grid-template-rows: repeat(2, calc(70vh / 2 - (var(--space-6) / 2)));
      }
    }

    @media only screen and (max-width: 21.75em) {
      & {
        height: 60dvh;
        grid-template-columns: repeat(9, 35vh);
        grid-template-rows: repeat(2, calc(60vh / 2 - (var(--space-6) / 2)));
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-lg);

    display: block;
  }

  & img:first-child,
  & img:nth-child(2),
  & img:nth-child(7) {
    grid-row: 1 / -1;
  }

  & img:nth-child(2) {
    object-position: center 15%;

    grid-column: 2 / span 2;
  }

  & img:nth-child(5) {
    grid-column: 6 / span 2;
  }

  & img:nth-child(7) {
    grid-column: 9 / -1;
  }

  & img:nth-child(9) {
    grid-column: 5 / span 2;
  }
`;

function Gallery() {
  const ref = useRef();
  // const { scrollYProgress } = useScroll({ target: ref });
  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-61.9%"]);

  return (
    <StyledGallery ref={ref}>
      {/* <motion.div style={{ x }}> */}
      <motion.div>
        <img
          src="./assets/home_gallery/watch_ultra.jpg"
          alt="Apple Watch Ultra"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/mac_pro.jpg"
          alt="Apple Mac Pro"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/macbook_pro.jpg"
          alt="Apple Macbook Pro"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/homepod.jpg"
          alt="Apple Homepod"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/iphone_pro_max.jpg"
          alt="Apple iPhone Pro Max"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/imac.jpg"
          alt="Apple iMac"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/ipad_pro.jpg"
          alt="Apple iPad Pro"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/airpods_pro.jpg"
          alt="Apple Airpods Pro"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/airpods_max.jpg"
          alt="Apple Airpods Max"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/display_xdr.jpg"
          alt="Apple Pro Display XDR"
          loading="lazy"
        />
        <img
          src="./assets/home_gallery/airpods_pro__girl.jpg"
          alt="A young woman is wearing Apple AirPods Pro"
          loading="lazy"
        />
      </motion.div>
    </StyledGallery>
  );
}

export default Gallery;
