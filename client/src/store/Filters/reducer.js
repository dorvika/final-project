const initialState = {
  category: "",
  price: "",
  size: "",
  color: "",
  fabric: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER_PARAMS": {
      return action.payload.filterParams;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
