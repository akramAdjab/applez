import { useQuery } from "@tanstack/react-query";

export function useOrder() {
  const { data: order, isLoading: isLoadingOrder } = useQuery({
    queryKey: ["order", order.id],
  });

  return { order, isLoadingOrder };
}
