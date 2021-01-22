import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import BadgeNew from "./pages/BadgeNew";
import Badge from "./pages/Badge.js";
const container = document.getElementById("app");

// ReactDOM.render(__qué__,__dónde__)
ReactDOM.render(<Badge />, container);
