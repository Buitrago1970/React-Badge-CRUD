import React from "react";

import "./styles/Badge__New.css";
import Badge from "../components/Badge";
import Hero from "../images/Badge-header.png";
import BadgeForm from "../components/BadgeForm";
import PageLoanding from "../components/PageLoanding";
import api from "../api";

class badgesNew extends React.Component {
  state = {
    error: null,
    loanding: false,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarURL: "",
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
      this.setState({ loanding: false});
      this.props.history.push('/Badges')
    } catch (error) {
      this.setState({ loanding: false, error: error });
    }
  };
  render() {
    if (this.state.loanding) {
      return <PageLoanding />;
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
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default badgesNew;
