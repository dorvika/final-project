import { fetchData } from "../../utils/api";

/* code review: good
  запити до сервера зроблені в redux-thunk
 */
export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: "START_FETCH_PRODUCTS",
  });
  fetchData("/products")
    .then((products) => {
      const action = loadedProducts(products);
      dispatch(action);
    })
    .catch(() => {
      dispatch(errorLoading());
    });
};

export const loadedProducts = (products) => {
  return {
    type: "LOADED_PRODUCTS",
    payload: { productList: products },
  };
};

export const errorLoading = () => ({
  type: "ERROR_LOADED_PRODUCTS",
});
