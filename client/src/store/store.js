import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

// add reducers and uncomment code

//   export const rootReducer = combineReducers({
//   });

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

//   const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk), devTools)
//   );

// export default store;
