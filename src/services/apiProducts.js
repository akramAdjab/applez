import commerce from "./commercejs";

export async function products(currentSearchCategory) {
  let query = commerce.products;

  if (currentSearchCategory === "all") query = query.list({ limit: 100 });
  else
    query = query.list({
      category_slug: [currentSearchCategory],
    });

  const products = await query;

  return products;
}

export async function product(productPermalink) {
  if (!productPermalink) return;

  const product = await commerce.products.retrieve(productPermalink, {
    type: "permalink",
  });
  return product;
}
