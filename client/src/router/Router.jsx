import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Bag,
  Categories,
  Error,
  Home,
  ProductDetails,
  Payment,
  Returns,
  PrivacyPolicy,
  TermsOfService,
  AboutUs,
  Reviews,
  Blog,
} from "../pages";


export default function Router() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bag" element={<Bag/>}/>
        <Route path="/payment" element={<Payment />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}
