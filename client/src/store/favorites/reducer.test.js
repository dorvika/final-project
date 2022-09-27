import reducer from "./reducer";

describe("favorites reducer", () => {
  const state = {
    favorites: [
      {
        name: "westport lake",
        currentPrice: 359,
        itemNo: 1,
      },
    ],
  };
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      favorites: [],
    });
  });
  describe("for ADD_FAVORITE action", () => {
    it("should add passed product to favorites list", () => {
      expect(
        reducer(state, {
          type: "ADD_FAVORITE",
          payload: {
            product: {
              name: "sensey set",
              currentPrice: 249,
              itemNo: 2,
            },
          },
        })
      ).toEqual({
        favorites: [
          {
            name: "westport lake",
            currentPrice: 359,
            itemNo: 1,
          },
          {
            name: "sensey set",
            currentPrice: 249,
            itemNo: 2,
          },
        ],
      });
    });
  });
  describe("for REMOVE_FAVORITE action", () => {
    it("should remove passed product from favorites list", () => {
      expect(
        reducer(state, {
          type: "REMOVE_FAVORITE",
          payload: {
            product: {
              name: "westport lake",
              currentPrice: 359,
              itemNo: 1,
            },
          },
        })
      ).toEqual({
        favorites: [],
      });
    });
  });
});
