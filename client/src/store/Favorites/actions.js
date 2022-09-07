export const addFavorite = (product) => {
  return {
    type: "ADD_FAVORITE",
    payload: { product },
  };
};

export const removeFavorite = (product) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: { product },
  };
};
