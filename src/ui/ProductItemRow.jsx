import { formatCurrency } from "../utilis/helpers";
import Row from "./Row";

function ProductItemRow({ items, item, index }) {
  const productName = items.map((i) =>
    i.selected_options.find((option) => option.group_name === "Model")
      ? i.selected_options.find((option) => option.group_name === "Model")
          .option_name
      : i.product_name
  );

  return (
    <Row $justify="space-between">
      <Row $direction="column">
        <p className="text-important">
          <span style={{ textTransform: "lowercase" }}>{item.quantity}x</span>{" "}
          {/* {item.selected_options
          .filter((option) => option.group_name === "Model")
          .map((option) => (
            <span key={option.group_id}>{option.option_name}</span>
          ))} */}
          {<span key={item.id}>{productName.at(index)}</span>}
        </p>
        {item.selected_options
          .filter((option) => option.group_name !== "Model")
          .map((option) => (
            <p className="text-light text-small" key={option.group_id}>
              {option.group_name}: {option.option_name}
            </p>
          ))}
      </Row>

      <p className="text-important">{formatCurrency(item.price.raw)}</p>
    </Row>
  );
}

export default ProductItemRow;
