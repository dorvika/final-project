export const setFilterParams = (filterObj) => {
  return {
    type: "SET_FILTER_PARAMS",
    payload: { filterParams: filterObj },
  };
};
