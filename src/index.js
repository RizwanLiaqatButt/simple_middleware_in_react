import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// middleware function
const logAction = store => next => action => {
  console.log(action);
  next(action);
};

const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
