export const setFilterParams = (filterObj) => {
  return {
    type: "SET_FILTER_PARAMS",
    payload: { filterParams: filterObj },
  };
};

export const newQuantity = (quantity) => {
  return {
    type: "SET_QUANTITY_ON_PAGE",
    payload: quantity,
  };
};
