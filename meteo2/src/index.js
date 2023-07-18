import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WeatherShow } from "./weather/WeatherShow"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherShow/>
  </React.StrictMode>,
);
