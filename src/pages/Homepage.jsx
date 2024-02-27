import HeroWithBackground from "../ui/HeroWithBackground";
import SectionWithTitle from "../ui/SectionWithTitle";
import Products from "../features/products/ProductsList";
import Gallery from "../ui/Gallery";
import Categories from "../features/categories/Categories";
import Highlights from "../ui/Highlights";

function Homepage() {
  return (
    <main>
      {/* --- HERO SECTION --- */}
      <HeroWithBackground
        mainTitle="iPhone 15 Pro"
        subTitle="Titanium. So strong. So light. So pro."
        buttonTitle="Buy it now"
      />

      {/* --- SECTION PRODUCTS --- */}
      <SectionWithTitle
        afterHero="true"
        shadowTitle="Trending"
        mainTitle="Trending now"
        showProductsLink="true"
      >
        <Products lessProducts={true} />
      </SectionWithTitle>

      {/* --- SECTION GALLER --- */}
      <SectionWithTitle
        dark="true"
        wide="true"
        full="true"
        shadowTitle="Gallery"
        mainTitle="Always iconic"
      >
        <Gallery />
      </SectionWithTitle>

      {/* --- SECTION CATEGORIES --- */}
      <SectionWithTitle shadowTitle="Categories" mainTitle="Our categories">
        <Categories />
      </SectionWithTitle>

      {/* --- SECTION DIVE DEEP --- */}
      <SectionWithTitle
        dark="true"
        wide="true"
        full="true"
        animatedBackground="true"
        shadowTitle="A closer look"
        mainTitle="Get the highlights"
      >
        <Highlights />
      </SectionWithTitle>
    </main>
  );
}

export default Homepage;
