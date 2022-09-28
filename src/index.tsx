import * as React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./config/store";
import "./index.styles.css";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
