const initialState = {
    favorites: [],
  };
const reducer = (state = initialState, action) => {
    switch (action.type) {
		case 'GET_FAVORITES_LOCALSTORAGE': {
			return [...action.payload.data]
		}
		case 'ADD_FAVORITE': {
			const isExist = state.favorites.some((product)=> product.id === action.payload.product.id)
            if (isExist) return {
                ...state,
                favorites: state.favorites.filter((product)=> product.id !== action.payload.product.id)
            }
			return {
                ...state, 
                favorites: [...state.favorites, action.payload.product]}
		}
		default: {
			return state
		}
	}
}

export default reducer