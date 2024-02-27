import { Link } from "react-router-dom";
import styled from "styled-components";

import { cursor } from "../../utilis/mouse";
import { formatCurrency } from "../../utilis/helpers";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

const ProuductLink = styled(Link)`
  & img {
    border-radius: var(--border-radius-lg);
    aspect-ratio: 1;
  }

  & h4 {
    font-weight: 500;
  }

  & div:last-of-type {
    padding-left: var(--space-2);
  }
`;

function ProductItems({ product }) {
  const {
    name,
    price: { raw: productPrice },
    image: { url },
    permalink,
  } = product;

  return (
    <ProuductLink
      to={`/product/${permalink}`}
      data-cursor-text="Show"
      onClick={() => {
        cursor.removeText();
      }}
    >
      <Row $direction="column" $gap={5}>
        <img src={url} alt={name} loading="lazy" />
        <Row $direction="column">
          <Heading as="h4">{name}</Heading>
          <p className="product-price__card">{formatCurrency(productPrice)}</p>
        </Row>
      </Row>
    </ProuductLink>
  );
}

export default ProductItems;
