import React from "react";
import "./styles/Badge.css";
import ConfLogo from "../images/badge.png";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

class badge extends React.Component {
  render() {
    const { firstName, lastName,email, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img
            className="img-fluid"
            src={ConfLogo}
            alt="Logo de la imgen"
          ></img>
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={email}
            alt="Avatar"
          />
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
          <Link to={"badges/new"}>#McDonals</Link>
        </div>
      </div>
    );
  }
}
export default badge;
