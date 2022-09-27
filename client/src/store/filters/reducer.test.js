import reducer from "./reducer";

describe("filters reducer", () => {
  const state = {
    filteredProducts: [],
    filteredProductsQty: 0,
    searchedProducts: [],
  };
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      filteredProducts: [],
      filteredProductsQty: 0,
      searchedProducts: [],
    });
  });
  describe("for SET_FILTERED_PRODUCTS action", () => {
    it("should set passed products to 'filteredProducts' property", () => {
      expect(
        reducer(state, {
          type: "SET_FILTERED_PRODUCTS",
          payload: [
            {
              name: "westport lake",
              currentPrice: 359,
            },
          ],
        })
      ).toEqual({
        filteredProducts: [
          {
            name: "westport lake",
            currentPrice: 359,
          },
        ],
        filteredProductsQty: 0,
        searchedProducts: [],
      });
    });
  });
  describe("for SET_FILTERED_PRODUCTS_QTY action", () => {
    it("should set passed quantity to 'filteredProductsQty' property", () => {
      expect(
        reducer(state, {
          type: "SET_FILTERED_PRODUCTS_QTY",
          payload: 8,
        })
      ).toEqual({
        filteredProducts: [],
        filteredProductsQty: 8,
        searchedProducts: [],
      });
    });
  });
  describe("for SET_SEARCHED_PRODUCTS action", () => {
    it("should set passed products to 'searchedProducts' property", () => {
      expect(
        reducer(state, {
          type: "SET_SEARCHED_PRODUCTS",
          payload: [
            {
              name: "westport lake",
              currentPrice: 359,
            },
          ],
        })
      ).toEqual({
        filteredProducts: [],
        filteredProductsQty: 0,
        searchedProducts: [
          {
            name: "westport lake",
            currentPrice: 359,
          },
        ],
      });
    });
  });
});
