import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../../ui/Button";
import Row from "../../ui/Row";

const StyledRow = styled(Row)`
  & button {
    white-space: pre;
  }

  @media only screen and (max-width: 43.75em) {
    & {
      overflow-x: scroll;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

function CategoriesButtons({ categories }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleUpdateSearch(categorySlug) {
    searchParams.set("category", categorySlug ? categorySlug : "all");
    setSearchParams(searchParams);
  }

  return (
    <StyledRow $gap={3}>
      <Button
        $variation={
          searchParams.get("category") === "all" ||
          searchParams.get("category") === null
            ? "primary"
            : "secondary"
        }
        onClick={() => handleUpdateSearch()}
      >
        All
      </Button>
      {categories?.map((category) => (
        <Button
          $variation={
            (searchParams.get("category") === "tv-home"
              ? "tv-&-home"
              : searchParams.get("category")) ===
            category.name.toLowerCase().replaceAll(" ", "-")
              ? "primary"
              : "secondary"
          }
          key={category.id}
          onClick={() => handleUpdateSearch(category.slug)}
        >
          {category.name}
        </Button>
      ))}
    </StyledRow>
  );
}

export default CategoriesButtons;
