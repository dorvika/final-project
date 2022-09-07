import BagCartModel from "../ProductsModels/BagCartModel.jsx";
import BagCartModelSmall from "../ProductsModels/BagCartModelSmall.jsx";
const ShoppingBag = ({ products, small = false }) => {
  return products.map((cartItem) => {
    return small ? (
      <BagCartModelSmall
        key={cartItem.product._id}
        _id={cartItem.product._id}
        itemNo={cartItem.product.itemNo}
        imageUrls={cartItem.product.imageUrls}
        name={cartItem.product.name}
        currentPrice={cartItem.product.currentPrice}
        cartQuantity={cartItem.cartQuantity}
        product={cartItem}
      />
    ) : (
      <BagCartModel
        key={cartItem.product._id}
        _id={cartItem.product._id}
        itemNo={cartItem.product.itemNo}
        imageUrls={cartItem.product.imageUrls}
        name={cartItem.product.name}
        description={cartItem.product.description}
        currentPrice={cartItem.product.currentPrice}
        cartQuantity={cartItem.cartQuantity}
        product={cartItem}
      />
    );
  });
};

export default ShoppingBag;
