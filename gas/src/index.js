import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GasPrice } from "./gas/GasPrice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GasPrice />
  </React.StrictMode>,
);
