import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

//react router
import App from "./components/App.js";

const container = document.getElementById("app");

// ReactDOM.render(__qué__,__dónde__)
ReactDOM.render(<App />, container);
