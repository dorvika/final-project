import { getDataLS } from "../../utils/api";

const token = getDataLS("userToken");

const initialState = {
  loggedIn: {
    isLoggedIn: false,
    userData: {},
  },
};

const reducer = (state = initialState.loggedIn, action) => {
  switch (action.type) {
    case "LOGGED_IN": {
      return {
        isLoggedIn: true,
        userData: action.payload.data,
      };
    }
    case "FETCH_LOGGED_IN_USER_DATA": {
      if (!token || token.length === 0) return state;

      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
    }

    case "LOGGED_OUT": {
      return {
        isLoggedIn: false,
        userData: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
