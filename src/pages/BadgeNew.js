import React from "react";

import "./styles/Badge__New.css";
import Badge from "../components/Badge";
import Hero from "../images/Badge-header.png";
import BadgeForm from "../components/BadgeForm";
import PageLoanding from "../components/PageLoanding";
import api from "../api";

class badgesNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarURL: "",
    },
    state: {
      data: undefined,
      error: null,
      loanding: true,
      // page: false,
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
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loanding: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loanding: false, page: false });
    } catch (error) {
      this.setState({ loanding: true, error: error });
    }
  };
  render() {
    if (this.state.loanding) {
      return <PageLoanding x={this.state.state.page} />;
    }
    return (
      <>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={Hero} alt="Hero" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                email={this.state.form.email || ""}
                twitter={this.state.form.twitter || "Twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
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
