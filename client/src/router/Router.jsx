import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Categories,
  Error,
  Home,
  ProductDetails,
  Payment,
  Returns,
  PrivacyPolicy,
  TermsOfService,
} from "../pages";

export default function Router() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}
