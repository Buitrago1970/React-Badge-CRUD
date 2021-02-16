import React from "react";

import BadgeList from "../components/BadgeList";
import "./styles/Badge.css";
import Logo from "../images/carls-jr-seeklogo.com.svg";
import { Link } from "react-router-dom";
import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor");
    this.state = {
      data: undefined,
      error: null,
      loanding: true,
    };
  }
  componentDidMount() {
    console.log("3. componentDidMount");
    this.fetchData();
  }
  fetchData = async () => {
    try {
      const data = await api.badges.list();
      this.setState({ loanding: false, data: data });
    } catch (error) {
      this.setState({ loanding: false, error: error });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate");
    console.log({ prevProps: prevProps, prevState: prevState });
    console.log({ props: this.props, state: this.state });
  }
  componentWillUnmount() {
    console.log("6. componentWillUnmount");
    clearTimeout(this.timeoutId);
  }
  render() {
    if (this.state.loanding) {
      return "loanding...";
    }
    if (this.state.error) {
      return `${this.state.error} `;
    }
    console.log("2/4. render");
    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={Logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList listValues={this.state.data} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Badges;
