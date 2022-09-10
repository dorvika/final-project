import BagCartModel from "../ProductsModels/BagCartModel.jsx";
import BagCartModelSmall from "../ProductsModels/BagCartModelSmall.jsx";
const ShoppingBag = ({ products, small = false }) => {
  return products.map((cartItem) => {
    return small ? (
      <BagCartModelSmall
        key={cartItem.product._id}
        cartQuantity={cartItem.cartQuantity}
        product={cartItem.product}
      />
    ) : (
      <BagCartModel
        key={cartItem.product._id}
        cartQuantity={cartItem.cartQuantity}
        product={cartItem.product}
      />
    );
  });
};

export default ShoppingBag;
