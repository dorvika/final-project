import BagCartModel from "../ProductsModels/BagCartModel.jsx";
import BagCartModelSmall from "../ProductsModels/BagCartModelSmall.jsx";
const ShoppingBag = ({ products, small = false }) => {
  return products.map((product) => {
    return small ? (
      <BagCartModelSmall
        key={product._id}
        id={product._id}
        image={product.imageUrls[0]}
        title={product.name}
        price={product.currentPrice}
      />
    ) : (
      <BagCartModel
      key={product._id}
      id={product._id}
      image={product.imageUrls[0]}
      title={product.name}
      subtitle={product.description}
      price={product.currentPrice}
      />
    );
  });
};

export default ShoppingBag;
