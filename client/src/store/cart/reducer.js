import { getDataLS } from "../../utils/api";

const cartData = getDataLS("cart");

const initialState = {
  cart: { cart: cartData, isLoading: false, hasError: false },
};

const reducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case "LOAD_REQUEST": {
      return {
        ...state, isLoading: true
      }
    }
    case "LOAD_SUCCESS": {
      return {
        ...state, isLoading: false
      }
    }
    case "GET_PRODUCTS_WITHOUT_ERROR": {
      return {
        ...state, hasError: false
      }
    }
    case "GET_PRODUCTS_WITH_ERROR": {
      return {
        ...state, hasError: true
      }
    }
    case "GET_CART_LOCALSTORAGE": {
      return {
        ...state,
        cart: [...action.payload.data.products]
      }
		}
		case 'ADD_TO_CART': { 
			const isExist = state.cart.some((products)=> products.product._id === action.payload.product._id);
        if (isExist) return {
                ...state,
                cart: state.cart.map((products) => products.product._id === action.payload.product._id ? {product: products.product, cartQuantity: products.cartQuantity + 1} : products)}
            return {
                ...state, 
                cart: [...state.cart, {product: action.payload.product, cartQuantity: 1}] 
            }
		}
    case 'CHANGES_TO_CART': { 
			const isExist = state.cart.some((products)=> products.product._id === action.payload.product._id);
        if (isExist) return {
                ...state,
                cart: state.cart.map((products) => products.product._id === action.payload.product._id ? {product: products.product, cartQuantity: action.payload.cartQuantity} : products)}
            return {
                ...state, 
                cart: [...state.cart, {product: action.payload.product, cartQuantity: action.payload.cartQuantity}] 
            }
		}
    case 'DECREASE_CART_ITEM': {
      return {
        ...state,
        cart: state.cart.map((products) => products.product._id === action.payload.product._id ? {product: products.product, cartQuantity: products.cartQuantity - 1} : products)}
    }
		case 'REMOVE_FROM_CART': {
			return {
                ...state,
                cart: state.cart.filter((products)=> products.product._id !== action.payload.id)}
		}
    case 'REMOVE_ALL_FROM_CART': {
			return {...state, 
        cart: state.cart.filter((products) => !products.product._id)}
		}
		default: {
			return state
		}
	}
  };
  
  export default reducer;
