import React from "react";

import "./styles/Badge.css";
import ConfLogo from "../images/badge-header.svg";

class badge extends React.Component {
  render() {
    const { firstName, lastName, avatarURL, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={ConfLogo} alt="Logo de la imgen"></img>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar  " src={avatarURL} alt="Avatar"></img>
          <h1>
            {firstName}
            <br /> {lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        <div className="Badge__footer">
          <a>#McDonals</a>
        </div>
      </div>
    );
  }
}
export default badge;
