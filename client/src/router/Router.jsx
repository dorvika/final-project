import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Categories,
  Error,
  Home,
  ProductCard,
  Payment,
  Returns,
  PrivacyPolicy,
  TermsOfService,
  AboutUs,
  Reviews,
  Blog,
  CheckOut,
} from "../pages";

export default function Router() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<CheckOut />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/favorite" element={<Blog />} />
        <Route path="/profile" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}
