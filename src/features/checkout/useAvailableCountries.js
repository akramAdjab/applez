import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { getAvailableCountries } from "../../services/apiCheckout";
import { updateCountriesCode } from "../../redux/checkoutSlice";

export function useAvailableCountries() {
  const { checkoutId } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();

  const { data: countries, isLoading: isLoadingCountries } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getAvailableCountries(checkoutId),
    enabled: checkoutId !== null,
  });

  useEffect(
    function () {
      if (countries) {
        dispatch(updateCountriesCode(Object.keys(countries)));
        // localStorage.setItem("countries", JSON.stringify(countries));
      }
    },
    [countries, dispatch]
  );

  return { countries, isLoadingCountries };
}
