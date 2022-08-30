const initialState = {
  filters: {},
  showQuantity: 9,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER_PARAMS": {
      return { ...state, filters: action.payload.filterParams };
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
