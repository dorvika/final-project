const initialState = {
  showQuantity: 9,
  filteredProducts: [],
  filteredProductsQty: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTERED_PRODUCTS": {
      return { ...state, filteredProducts: action.payload };
    }
    case "SET_FILTERED_PRODUCTS_QTY": {
      return { ...state, filteredProductsQty: action.payload };
    }
    case "SET_QUANTITY_ON_PAGE": {
      return {
        ...state,
        showQuantity: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
