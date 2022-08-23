import BagCartModel from "./ProductsModels/BagCartModel.jsx";
import BagCartModelSmall from "./ProductsModels/BagCartModelSmall.jsx";
const ShoppingBag = ({ products, small = false }) => {
  return products.map((product) => {
    return small ? (
      <BagCartModelSmall
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.name}
        price={product.price}
      />
    ) : (
      <BagCartModel
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.name}
        subtitle={product.subtitle}
        price={product.price}
      />
    );
  });
};

export default ShoppingBag;
