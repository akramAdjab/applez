import commerce from "./commercejs";

export async function categories() {
  const categories = await commerce.categories.list();
  return categories;
}
