import { getDataLS } from "../../utils/api";

const initialState = {
  filteredProducts: [],
  filteredProductsQty: 0,
  searchedProducts: getDataLS("search"),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTERED_PRODUCTS": {
      return { ...state, filteredProducts: action.payload };
    }
    case "SET_FILTERED_PRODUCTS_QTY": {
      return { ...state, filteredProductsQty: action.payload };
    }
    case "SET_SEARCHED_PRODUCTS": {
      return { ...state, searchedProducts: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
