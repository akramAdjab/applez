import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart as addToCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useAddToCart() {
  const queryClient = useQueryClient();

  const { mutate: addToCart, isPending: isAdding } = useMutation({
    mutationFn: (productObj) => addToCartApi(productObj),
    onSuccess: () => {
      toast.success("Product has been added to the cart");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: () => {
      toast.error("An error occurred while adding a product to the cart");
    },
  });

  return { addToCart, isAdding };
}
