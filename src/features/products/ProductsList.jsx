import { useProducts } from "./useProducts";

import ProductsItem from "./ProductsItem";
import ProductsContainer from "../../ui/ProductsContainer";
import Loading from "../../ui/Loading";

function Products({ lessProducts = false }) {
  const { products, isLoadingProducts } = useProducts();
  const productsToRender = lessProducts ? products?.slice(0, 4) : products;

  if (isLoadingProducts) return <Loading type="products" length={4} />;

  return (
    <ProductsContainer>
      {productsToRender.map((product) => (
        <ProductsItem product={product} key={product.id} />
      ))}
    </ProductsContainer>
  );
}

export default Products;
