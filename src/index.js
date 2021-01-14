import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from "./components/Badge";
const container = document.getElementById("app");

// ReactDOM.render(__qué__,__dónde__)
ReactDOM.render(
  <Badge
    firstName="Juan"
    lastName="Buitrago"
    avatarURL="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    jobTitle="Cojonudo de la vida"
    twitter="JuanBu"
  />,
  container
);
