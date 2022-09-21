export const setFilteredProducts = (filteredProducts) => {
  return {
    type: "SET_FILTERED_PRODUCTS",
    payload: filteredProducts,
  };
};

export const setSearchedProducts = (searchedProducts) => {
  return {
    type: "SET_SEARCHED_PRODUCTS",
    payload: searchedProducts,
  };
};

export const setFilteredProductsQty = (quantity) => {
  return {
    type: "SET_FILTERED_PRODUCTS_QTY",
    payload: quantity,
  };
};
