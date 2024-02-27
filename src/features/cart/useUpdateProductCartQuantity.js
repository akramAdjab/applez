import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductCartQuantity as updateProductCartQuantityApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useUpdateProductCartQuantity() {
  const queryClient = useQueryClient();

  const { mutate: updateProductCartQuantity, isPending: isUpdatingQuantity } =
    useMutation({
      mutationFn: updateProductCartQuantityApi,
      onSuccess: () => {
        toast.success("Quantity was successfully updated");
        queryClient.invalidateQueries({
          queryKey: ["cart"],
        });
      },
      onError: () => {
        toast.error("An error occurred while updating the product quantity");
      },
    });

  return { updateProductCartQuantity, isUpdatingQuantity };
}
