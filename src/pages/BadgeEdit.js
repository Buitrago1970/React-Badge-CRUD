import React from "react";

import Badge from "../components/Badge";
import Hero from "../images/Badge-header.png";
import BadgeForm from "../components/BadgeForm";
import "./styles/Badge__Edit.css";

import PageLoanding from "../components/PageLoanding";
import api from "../api";

class badgesEdit extends React.Component {
  state = {
    error: null,
    loanding: true,
    borrar: true,
    modalIsOpen: false,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarURL: "",
    },
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loanding: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loanding: false, form: data });
    } catch (error) {
      this.setState({ loanding: false, error: error });
    }
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loanding: false });
      this.props.history.push("/Badges");
    } catch (error) {
      this.setState({ loanding: false, error: error });
    }
  };
  // open/close modal
  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  //deleteBadge
  handleDeleteBadge = async (e) => {
    this.setState({ loanding: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loanding: false });
      this.props.history.push("/Badges");
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
        <div className="BadgeEdit__hero">
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
              <h1>EDITAR</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
                borrar={this.state.borrar}
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                deleteBadge={this.handleDeleteBadge}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default badgesEdit;
