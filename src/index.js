
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Timer from "./component/Timer";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <Timer/>
  </div>
);
