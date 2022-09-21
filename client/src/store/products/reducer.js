const initialState = {
  products: { products: [], isLoading: false, hasError: false },
};

const reducer = (state = initialState.products, action) => {
  switch (action.type) {
    case "START_FETCH_PRODUCTS": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "LOADED_PRODUCTS": {
      return {
        ...state,
        products: action.payload.productList,
        isLoading: false,
      };
    }
    case "ERROR_LOADED_PRODUCTS": {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
