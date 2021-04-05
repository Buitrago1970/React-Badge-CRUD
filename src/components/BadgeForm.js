import React from "react";

import DeleteBadgeModal from "../components/DeleteBadgeModal";
import { BsTrash } from "react-icons/bs";

class BadgeForm extends React.Component {
  // handleClick = () => {
  //   console.log("button was clicked");
  //   console.log(this.state);
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form was submit ");
  // };

  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              placeholder="introduce tu nombre"
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              //input de estado NO controlado a controlado (no gurdar 2 veces la info)
              value={this.props.formValues.firstName}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              placeholder="introduce tu segundo nombre"
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              placeholder="introduce tu email"
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
              required
            />
          </div>
          <div className="form-group">
            <label>jobTitle</label>
            <input
              placeholder="introduce tu titulo de trabjo"
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
              required
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              placeholder="introduce tu twitter"
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
              required
            />
          </div>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
          {this.props.borrar && (
            <p
              onClick={this.props.onOpenModal}
              className="text-danger text-right btn-delete"
            >
              <BsTrash /> Borrar Badge{" "}
            </p>
          )}
          <DeleteBadgeModal
            onClose={this.props.onCloseModal}
            isOpen={this.props.modalIsOpen}
            deleteBadge={this.props.deleteBadge}
          />
          <button onClick={this.handleClick} className="btn btn-primary">
            save
          </button>
        </form>
      </>
    );
  }
}

export default BadgeForm;
