import { getDataLS } from "../../utils/api";

const cartData = getDataLS("cart");

const initialState = {
  cart: { cart: cartData, isLoading: false, hasError: false },
};

const reducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case "GET_CART_LOCALSTORAGE": {
      return {
        ...state,
        cart: [...action.payload.data],
      };
    }
    case "ADD_TO_CART": {
      const isExist = state.cart.some(
        (product) => product._id === action.payload.product._id
      );
      if (isExist)
        return {
          ...state,
          cart: state.cart.map((product) =>
            product._id === action.payload.product._id
              ? { ...product, qty: product.qty + 1 }
              : product
          ),
        };
      return {
        ...state,
        cart: [...state.cart, { ...action.payload.product, qty: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((cart) => cart._id !== action.payload.id),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
