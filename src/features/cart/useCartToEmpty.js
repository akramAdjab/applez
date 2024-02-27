import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cartToEmpty as cartToEmptyApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useCartToEmpty() {
  const queryClient = useQueryClient();

  const { mutate: cartToEmpty, isPending: isEmptyingCart } = useMutation({
    mutationFn: cartToEmptyApi,
    onSuccess: () => {
      toast.success("The cart was successfully emptied");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: () => {
      toast.error("An error occurred while emptying the cart");
    },
  });

  return { cartToEmpty, isEmptyingCart };
}
