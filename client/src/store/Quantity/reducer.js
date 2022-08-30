const initialState = {
  showQuantity: 9,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUANTITY_ON_PAGE": {
      return {
        showQuantity: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
