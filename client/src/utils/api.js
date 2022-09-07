import axios from "axios";

const API = axios.create({
  baseURL: "https://bedding-postil.herokuapp.com/api",
});

API.interceptors.request.use((req) => {
  req.headers.authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjI3YjY5OTE5NGJlMGU2ODA0ZTFjYSIsImZpcnN0TmFtZSI6IlZpa2EiLCJsYXN0TmFtZSI6IkRvcm9zaGVua28iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjAwNTg2ODQsImV4cCI6MTY2MDA5NDY4NH0.mtKydPGctdr5gtEOUXBbQbAa5G0WayLMrRVb7VvShc8";
  return req;
});

export const fetchData = async (endpoint) => {
  const response = await API.get(endpoint);
  const { data } = response;
  return data;
};

export const getDataLS = (category) => {
  const lScategory = localStorage.getItem(category);
  if (!lScategory) return [];
  try {
    const value = JSON.parse(lScategory);
    return value;
  } catch (e) {
    return [];
  }
};

export const syncLS = function (store) {
  return function (next) {
    return function (action) {
      if (action.type === "ADD_FAVORITE" || action.type === "REMOVE_FAVORITE") {
        store.getState();
        const result = next(action);
        localStorage.setItem(
          "favorite",
          JSON.stringify(store.getState().favorites.favorites)
        );
        return result;
      }
      if (action.type === "ADD_TO_CART" || action.type === "REMOVE_FROM_CART" || action.type === "REMOVE_ALL_FROM_CART" || action.type === "DECREASE_CART_ITEM") {
        store.getState();
        const result = next(action);
        localStorage.setItem(
          "cart",
          JSON.stringify(store.getState().cart.cart)
        );
        return result;
      }
      return next(action);
    };
  };
};
