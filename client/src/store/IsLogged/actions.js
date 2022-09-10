export const setLoggedIn = (userData) => {
  return {
    type: "LOGGED_IN",
    payload: { data: userData },
  };
};

export const setLoggedOut = () => {
  return {
    type: "LOGGED_OUT",
    payload: false,
  };
};
