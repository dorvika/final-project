import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import modalReducer from "./Modal/reducer";

const initialState = {
  modal: false,
};

export const rootReducer = combineReducers({
  modal: modalReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
