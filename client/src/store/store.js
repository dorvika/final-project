import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { syncLS } from "../utils/api";
import thunk from "redux-thunk";
import modalReducer from "./Modal/reducer";
import filterReducer from "./Filters/reducer";
import productsReducer from "./Products/reducer";
import cartReducer from "./Cart/reducer";
import favoritesReducer from "./Favorites/reducer";
import isLoggedInReducer from "./IsLogged/reducer";

/* code review: good, but could be better
 можна було б використати redux-toolkit,
 щоб менше коду писати для редаксу

 code review: good
  добре розділений redux store
 */

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
