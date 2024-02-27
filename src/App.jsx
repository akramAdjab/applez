import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import Bookmarks from "./pages/Bookmarks";
import PageNotFound from "./pages/PageNotFound";

import GlobaStyles from "./styles/GlobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <GlobaStyles />

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Homepage />} />
              <Route path="products" element={<Products />} />
              <Route path="product/:productPermalink" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="order/:orderId" element={<Order />} />
              <Route path="bookmarks" element={<Bookmarks />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              color: "var(--color-primary-50)",
              maxWidth: "50rem",
              padding: "var(--space-5) var(--space-7)",
              backgroundColor: "var(--color-primary-950)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
