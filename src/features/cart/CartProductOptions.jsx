function CartProductOptions({ optionsWithoutColorAndModel }) {
  return (
    <p style={{ lineHeight: "1.5" }}>
      {optionsWithoutColorAndModel
        .map((option) => option.option_name)
        .join(", ")}
    </p>
  );
}

export default CartProductOptions;
