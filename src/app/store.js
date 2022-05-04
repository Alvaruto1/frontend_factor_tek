import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, compose, createStore } from "redux";

import thunk from "redux-thunk";
import reducers from "./../reducers";

/*export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});*/

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
