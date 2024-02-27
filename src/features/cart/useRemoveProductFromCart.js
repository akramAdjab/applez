import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeProductFromCart as removeProductFromCartApi } from "../../services/apiCart";

export function useRemoveProductFromCart() {
  const queryClient = useQueryClient();

  const { mutate: removeProductFromCart, isPending: isRemovingProduct } =
    useMutation({
      mutationFn: removeProductFromCartApi,
      onSuccess: () => {
        toast.success("Product was successfully removed from the cart");
        queryClient.invalidateQueries({
          queryKey: ["cart"]["checkout"],
        });
      },
      onError: () => {
        toast.error("An error occurred while removing the product to the cart");
      },
    });

  return { removeProductFromCart, isRemovingProduct };
}
