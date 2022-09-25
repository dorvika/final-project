import reducer from "./reducer";

describe("modal reducer", () => {
  const state = {
    modal: false,
  };
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual(false);
  });
  describe("for OPEN_MODAL action", () => {
    it("should return true", () => {
      expect(
        reducer(state, {
          type: "OPEN_MODAL",
          payload: true,
        })
      ).toEqual(true);
    });
  });
  describe("for CLOSE_MODAL action", () => {
    it("should return false", () => {
      expect(reducer(state, { type: "CLOSE_MODAL", payload: false })).toEqual(
        false
      );
    });
  });
});
