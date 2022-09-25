import reducer from "./reducer";

describe("cart reducer", () => {
  const state = {
    cart: [
      {
        cartQuantity: 1,
        product: {
          name: "sensey set",
          currentPrice: 249,
          _id: 1,
        },
      },
    ],
    isLoading: false,
    hasError: false,
  };
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({
      cart: [],
      isLoading: false,
      hasError: false,
    });
  });
  describe("for ADD_TO_CART action", () => {
    it("should add passed product to cart and increase 'cartQuantity' value by 1 if we passed product that already exists in the cart", () => {
      expect(
        reducer(state, {
          type: "ADD_TO_CART",
          payload: {
            product: {
              name: "sensey set",
              currentPrice: 249,
              _id: 1,
            },
          },
        })
      ).toEqual({
        isLoading: false,
        hasError: false,
        cart: [
          {
            cartQuantity: 2,
            product: {
              name: "sensey set",
              currentPrice: 249,
              _id: 1,
            },
          },
        ],
      });
    });
  });
  describe("for REMOVE_FROM_CART action", () => {
    it("should remove passed product from cart", () => {
      expect(
        reducer(state, {
          type: "REMOVE_FROM_CART",
          payload: {
            id: 1,
          },
        })
      ).toEqual({
        cart: [],
        isLoading: false,
        hasError: false,
      });
    });
  });
});
