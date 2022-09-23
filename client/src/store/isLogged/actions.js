import { fetchData } from "../../utils/api";

export const setLoggedIn = (userData) => {
  return {
    type: "LOGGED_IN",
    payload: { data: userData },
  };
};

export const fetchLoggedInUserData = () => {
  return (dispatch) => {
    fetchData("/customers/customer").then((response) => {
      dispatch({
        type: "FETCH_LOGGED_IN_USER_DATA",
        payload: response,
      });
    });
  };
};

export const loadedData = (userData) => {
  return {
    type: "LOADED_USER_DATA",
    payload: { data: userData },
  };
};
export const updateData = (userData) => {
  return {
    type: "UPDATE_USER_DATA",
    payload: { data: userData },
  };
};

export const setLoggedOut = () => {
  return {
    type: "LOGGED_OUT",
  };
};
