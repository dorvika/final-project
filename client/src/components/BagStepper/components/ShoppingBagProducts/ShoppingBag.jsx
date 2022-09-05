import BagCartModel from "../ProductsModels/BagCartModel.jsx";
import BagCartModelSmall from "../ProductsModels/BagCartModelSmall.jsx";
const ShoppingBag = ({ products, small = false }) => {
  return products.map((cartItem) => {
    return small ? (
      <BagCartModelSmall
        key={cartItem.product._id}
        id={cartItem.product._id}
        itemNo={cartItem.product.itemNo}
        image={cartItem.product.imageUrls[0]}
        title={cartItem.product.name}
        price={cartItem.product.currentPrice}
        cartQuantity={cartItem.cartQuantity}
      />
    ) : (
      <BagCartModel
        key={cartItem.product._id}
        id={cartItem.product._id}
        itemNo={cartItem.product.itemNo}
        image={cartItem.product.imageUrls[0]}
        title={cartItem.product.name}
        subtitle={cartItem.product.description}
        price={cartItem.product.currentPrice}
        cartQuantity={cartItem.cartQuantity}
      />
    );
  });
};

export default ShoppingBag;
