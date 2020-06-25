import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { CookiesProvider } from "react-cookie";

render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.querySelector("#root")
);
