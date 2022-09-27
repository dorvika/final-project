import axios from "axios";

const API = axios.create({
  baseURL: "https://bedding-postil.herokuapp.com/api",
});

API.interceptors.request.use(function (req) {
  const token = getDataLS("userToken");
  req.headers.common["Authorization"] = token.length !== 0 ? token : "";
  return req;
});

export const fetchData = async (endpoint) => {
  const response = await API.get(endpoint);
  const { data } = response;
  return data;
};
export const postSearchQuery = async (endpoint, query) => {
  const response = await API.post(endpoint, query);
  return response;
};

export const postData = async (endpoint, obj) => {
  const response = await API.post(endpoint, obj);
  return response;
};
export const putData = async (endpoint, obj) => {
  const response = await API.put(endpoint, obj);
  return response;
};

export const updateCustomerCart = async (endpoint, obj) => {
  const response = await API.put(endpoint, obj);
  return response;
};
export const updateCustomerWishlist = async (endpoint, obj) => {
  const response = await API.put(endpoint, obj);
  return response;
};

export const placeOrder = async (endpoint, obj) => {
  const response = await API.post(endpoint, obj);
  return response;
};

export const deleteData = async (endpoint) => {
  const response = await API.delete(endpoint);
  return response;
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
      if (action.type === "LOGGED_OUT") {
        const result = next(action);
        localStorage.clear();
        store.getState();
        return result;
      }
      if (action.type === "ADD_FAVORITE" || action.type === "REMOVE_FAVORITE") {
        store.getState();
        const result = next(action);
        localStorage.setItem(
          "favorite",
          JSON.stringify(store.getState().favorites.favorites)
        );
        return result;
      }
      if (
        action.type === "ADD_TO_CART" ||
        action.type === "REMOVE_FROM_CART" ||
        action.type === "REMOVE_ALL_FROM_CART" ||
        action.type === "DECREASE_CART_ITEM" ||
        action.type === "CHANGES_TO_CART"
      ) {
        store.getState();
        const result = next(action);
        localStorage.setItem(
          "cart",
          JSON.stringify(store.getState().cart.cart)
        );
        return result;
      }
      if (action.type === "SET_SEARCHED_PRODUCTS") {
        store.getState();
        const result = next(action);
        localStorage.setItem(
          "search",
          JSON.stringify(store.getState().filters.searchedProducts)
        );
        return result;
      }
      return next(action);
    };
  };
};

