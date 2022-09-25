import reducer from "./reducer";

describe("isLogged reducer", () => {
  const state = {
    loggedIn: {
      isLoggedIn: false,
      userData: {},
    },
  };
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      isLoggedIn: false,
      userData: {},
    });
  });
  describe("for LOGGED_IN action", () => {
    it("should return truthy 'isLoggedIn' property and passed userData object", () => {
      expect(
        reducer(state, {
          type: "LOGGED_IN",
          payload: { data: { name: "Vika", email: "dorvika2@gmail.com" } },
        })
      ).toEqual({
        isLoggedIn: true,
        userData: { name: "Vika", email: "dorvika2@gmail.com" },
      });
    });
  });
  describe("for FETCH_LOGGED_IN_USER_DATA action", () => {
    it("should return state if token is falsy", () => {
      expect(
        reducer(state, {
          type: "FETCH_LOGGED_IN_USER_DATA",
          payload: { name: "Vika", email: "dorvika2@gmail.com" },
        })
      ).toEqual({
        loggedIn: {
          isLoggedIn: false,
          userData: {},
        },
      });
    });
  });
  describe("for UPDATE_USER_DATA action", () => {
    it("should update user data with passed obj values", () => {
      expect(
        reducer(state, {
          type: "UPDATE_USER_DATA",
          payload: { data: { name: "Vika", email: "dorvika@gmail.com" } },
        })
      ).toEqual({
        isLoggedIn: true,
        userData: { name: "Vika", email: "dorvika@gmail.com" },
      });
    });
  });
  describe("for LOGGED_OUT action", () => {
    it("should change 'isLoggedIn' property to false and clean userData obj", () => {
      expect(
        reducer(state, {
          type: "LOGGED_OUT",
        })
      ).toEqual({
        isLoggedIn: false,
        userData: {},
      });
    });
  });
});
