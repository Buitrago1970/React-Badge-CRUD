import React from "react";
import "./styles/BadgeList.css";

import { AiOutlineTwitter } from "react-icons/ai";

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
        {this.props.listValues.map((persona) => {
          return (
            <li key={persona.id} className="list-group-item">
              <div className="BadgeList__section-name">
                <img className="" src={persona.avatarUrl} alt="Avatar"></img>
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
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
