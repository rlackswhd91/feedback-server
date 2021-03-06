import "materialize-css/dist/css/materialize.min.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Reducers from "./reducers";
import reduxThunk from "redux-thunk";

//for dev only
import axios from "axios";
window.axios = axios;
const store = createStore(Reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
