import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { syncLS } from "../utils/api";
import thunk from "redux-thunk";
import modalReducer from "./modal/reducer";
import filterReducer from "./filters/reducer";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import favoritesReducer from "./favorites/reducer";
import isLoggedInReducer from "./isLogged/reducer";

export const rootReducer = combineReducers({
  modal: modalReducer,
  filters: filterReducer,
  products: productsReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
  loggedIn: isLoggedInReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, syncLS), devTools)
);

export default store;
