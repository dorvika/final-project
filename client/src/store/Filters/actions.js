export const setFilteredProducts = (filteredProducts) => {
  return {
    type: "SET_FILTERED_PRODUCTS",
    payload: filteredProducts,
  };
};

export const setFilteredProductsQty = (quantity) => {
  return {
    type: "SET_FILTERED_PRODUCTS_QTY",
    payload: quantity,
  };
};

export const newQuantity = (quantity) => {
  return {
    type: "SET_QUANTITY_ON_PAGE",
    payload: quantity,
  };
};
