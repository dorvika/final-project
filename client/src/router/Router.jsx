import { Route, Routes } from "react-router-dom";
import { Cart, Categories, Error, Home, ProductDetails } from "../pages";

export default function Router() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}
