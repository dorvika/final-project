import reducer from "./reducer";

describe("products reducer", () => {
  const state = {
    products: { products: [], isLoading: false, hasError: false },
  };
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      products: [],
      isLoading: false,
      hasError: false,
    });
  });
  describe("for START_FETCH_PRODUCTS action", () => {
    it("should return state with truthy 'isLoading' property", () => {
      expect(reducer(state, { type: "START_FETCH_PRODUCTS" })).toEqual({
        isLoading: true,
        products: { products: [], isLoading: false, hasError: false },
      });
    });
  });
  describe("for LOADED_PRODUCTS action", () => {
    it("should add passed products to 'products' property of state", () => {
      expect(
        reducer(state, {
          type: "LOADED_PRODUCTS",
          payload: {
            productList: [
              {
                name: "westport lake",
                currentPrice: 359,
              },
              {
                name: "billie bedspread",
                currentPrice: 229,
              },
            ],
          },
        })
      ).toEqual({
        isLoading: false,
        products: [
          {
            name: "westport lake",
            currentPrice: 359,
          },
          {
            name: "billie bedspread",
            currentPrice: 229,
          },
        ],
      });
    });
  });
  describe("for ERROR_LOADED_PRODUCTS action", () => {
    it("should return state with truthy 'hasError' property", () => {
      expect(reducer(state, { type: "ERROR_LOADED_PRODUCTS" })).toEqual({
        isLoading: false,
        hasError: true,
        products: { products: [], isLoading: false, hasError: false },
      });
    });
  });
});
