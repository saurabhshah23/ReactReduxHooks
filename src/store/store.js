import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import searchReducer from "./searchReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  searchReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(searchReducer, applyMiddleware(thunk));

export default store;
