import { useQuery } from "@tanstack/react-query";
import { categories as apiCategories } from "../../services/apiCategories";

export function useCategories() {
  const { data: { data: categories } = {}, isLoading: isLoadingCategories } =
    useQuery({
      queryKey: ["categories"],
      queryFn: apiCategories,
    });

  return { categories, isLoadingCategories };
}
