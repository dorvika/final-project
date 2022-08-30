import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import modalReducer from "./Modal/reducer";
import filterReducer from "./Filters/reducer";
import productsReducer from "./Products/reducer";
import quantityReducer from "./Quantity/reducer";

export const rootReducer = combineReducers({
  modal: modalReducer,
  filters: filterReducer,
  products: productsReducer,
  showQuantity: quantityReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
