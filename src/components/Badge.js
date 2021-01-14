import React from "react";

import "./styles/Badge.css";
import ConfLogo from "../images/badge-header.svg";

class badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={ConfLogo} alt="Logo de la imgen"></img>
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar  "
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="Avatar"
          ></img>
          <h1>
            JUAN <br /> BUITRAGO
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Cojonudo</h3>
          <div>@junBu</div>
        </div>
        <div className="Badge__footer">
          <a>#Sandiego</a>
        </div>
      </div>
    );
  }
}
export default badge;
