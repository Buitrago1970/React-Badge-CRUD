import React from "react";

import astronauts from "../images/astronauts.svg";
import confLogo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <div className="home-description">
            <div className="img-conf">
              <img src={confLogo} alt="conf logo" />
            </div>
            <h2 className="titulo-conf">PRINT YOUR BADGES</h2>
            <p className="parrafo-conf">
              The easiest way to manage your conference
            </p>
            <div className="home__buttons">
              <Link to="/Badges" className="btn btn-primary">
                Start now
              </Link>
            </div>
          </div>
          <div className="home-description">
            <img className="home-conf-logo" src={astronauts} alt="astronauts" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
