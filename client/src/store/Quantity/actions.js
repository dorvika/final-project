export const newQuantity = (quantity) => {
  return {
    type: "SET_QUANTITY_ON_PAGE",
    payload: quantity,
  };
};
