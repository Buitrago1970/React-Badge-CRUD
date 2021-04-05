import React from "react";
import Skeleton from "react-loading-skeleton";
import "./styles/BadgeList.css";
import "./styles/PageLoanding.css";

class PageLoanding extends React.Component {
  render() {
    return (
      <>
        <div className="Badges__container">
          <li className="list-group-item">
            <Skeleton />
            <div className="BadgeList__section-name">
              <Skeleton width={90} height={90} />
            </div>
            <div className="Badge_prueba">
              <h5>
                <Skeleton width={300} height={15} />
              </h5>
              <p className="twitter_blue_font">
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
          </li>
          <li className="list-group-item">
            <Skeleton />
            <div className="BadgeList__section-name">
              <Skeleton width={90} height={90} />
            </div>
            <div className="Badge_prueba">
              <h5>
                <Skeleton width={300} height={15} />
              </h5>
              <p className="twitter_blue_font">
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
          </li>
          <li className="list-group-item">
            <Skeleton />
            <div className="BadgeList__section-name">
              <Skeleton width={90} height={90} />
            </div>
            <div className="Badge_prueba">
              <h5>
                <Skeleton width={300} height={15} />
              </h5>
              <p className="twitter_blue_font">
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
          </li>
          <li className="list-group-item">
            <Skeleton />
            <div className="BadgeList__section-name">
              <Skeleton width={90} height={90} />
            </div>
            <div className="Badge_prueba">
              <h5>
                <Skeleton width={300} height={15} />
              </h5>
              <p className="twitter_blue_font">
                <Skeleton />
              </p>
              <p>
                <Skeleton />
              </p>
            </div>
          </li>
        </div>
      </>
    );
  }
}
export default PageLoanding;
