import { useLocation } from "react-router-dom";

export function useIsHomepage() {
  const { pathname } = useLocation();
  const isCurrentlyHomepage = pathname === "/";

  return isCurrentlyHomepage;
}
