import { getDataLS } from "../../utils/api";

const favoriteData = getDataLS("favorite");

const initialState = {
    favorites: favoriteData,
  };
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_FAVORITES_LOCALSTORAGE": {
        return {
          ...state,
          favorites: [...action.payload.data],
        };
      }
      case "ADD_FAVORITE": {
        const isExist = state.favorites.some(
          (product) => product._id === action.payload.product._id
        );
        if (isExist) return state;
        return {
          ...state,
          favorites: [...state.favorites, action.payload.product],
        };
      }
      case "REMOVE_FAVORITE": {
        return {
          ...state,
          favorites: state.favorites.filter(
            (elem) => elem._id !== action.payload.product.id
          ),
        };
      }
      default: {
        return state;
      }
    }
}

export default reducer