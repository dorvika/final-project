import { getDataLS } from "../../utils/api";

const favoriteData = getDataLS("favorite");

const initialState = {
    favorites: favoriteData,
  };
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAVORITE": {
        const isExist = state.favorites.some(
          (product) => product.itemNo === action.payload.product.itemNo
        );
        if (isExist) return state;
        return {
          favorites: [...state.favorites, action.payload.product],
        };
      }
      case "REMOVE_FAVORITE": {
        return {
          favorites: state.favorites.filter(
            (elem) => elem.itemNo !== action.payload.product.itemNo
          ),
        };
      }
      default: {
        return state;
      }
    }
}

export default reducer