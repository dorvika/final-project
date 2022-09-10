import { getDataLS } from "../../utils/api";

const token = getDataLS("userToken");
console.log("reducer token", token);

const initialState = {
  loggedIn: {
    isLoggedIn: false,
    userData: {},
  },
};

const reducer = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case "LOGGED_IN": {
      const token = getDataLS("userToken");
      if (!token) return state;

      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload.data,
      };
    }
    case "LOGGED_OUT": {
      return;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
