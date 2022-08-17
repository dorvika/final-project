const reducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_MODAL": {
      return true;
    }
    case "CLOSE_MODAL": {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
