import React from "react";

import ConfLogo from "../images/badge-header.svg";

class badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={ConfLogo} alt="Logo de la imgen"></img>
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar/HASH" alt="Avatar"></img>
          <h1>
            JUAN <br /> BUITRAGO
          </h1>
        </div>
        <div>
          <p>descripcion</p>
          <p>@junBU</p>
        </div>
        <div>
          <a>#Sandiego</a>
        </div>
      </div>
    );
  }
}
export default badge;
