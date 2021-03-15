import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import organiserReducer from "./store/reducers/organiser";
import volunteerReducer from "./store/reducers/volunteer";

const rootReducer = combineReducers({
  organiser: organiserReducer,
  volunteer: volunteerReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
