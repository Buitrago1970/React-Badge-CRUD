import React from "react";

import "./styles/Badge__New.css";
import Badge from "../components/Badge";
import Hero from "../images/Badge-header.png";
import BadgeForm from "../components/BadgeForm";

class badgesNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        //dejar caer los valores de this.state.form y agregamos uno (guardar todos los valores)
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={Hero} alt="Hero" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                avatarURL="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?r=pg"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default badgesNew;
