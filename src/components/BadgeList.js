import React from "react";
import "./styles/BadgeList.css";
import { Link } from "react-router-dom";

import { AiOutlineTwitter } from "react-icons/ai";
import Gravatar from "./Gravatar";

class BadgeList extends React.Component {
  render() {
    // if (this.props.badges.length === 0) {
    //   document.write("si funciona");
    // }
    // if (this.props.badges.length === 0) {
    //   return (
    //     <div>
    //       <h3>No badges were found</h3>
    //     </div>
    //   );
    // }
    return (
      <ul className="list-unstyled">
        {this.props.listValues.reverse().map((persona) => {
          return (
            <li key={persona.id} className="list-group-item">
              <div className="BadgeList__section-name">
                <Gravatar email={persona.email} alt="Avatar" />
              </div>
              <div className="Badge_prueba">
                <h5>
                  {persona.firstName} {persona.lastName}
                </h5>{" "}
                <p className="twitter_blue_font">
                  <AiOutlineTwitter size="30px" color="#007bff" />@
                  {persona.twitter}
                </p>
                <p> {persona.jobTitle}</p>
              </div>
              <div className="container-icon-edit">
                <Link to={`badges/${persona.id}/edit`}> ...</Link>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
