import SectionWithTitle from "../ui/SectionWithTitle";
import ProductsList from "../features/products/ProductsList";
import Categories from "../features/categories/Categories";

function Products() {
  return (
    <SectionWithTitle
      shadowTitle="Shop now"
      mainTitle="Our products"
      gap="true"
    >
      <Categories type="categoriesButtons" />
      <ProductsList />
    </SectionWithTitle>
  );
}

export default Products;
