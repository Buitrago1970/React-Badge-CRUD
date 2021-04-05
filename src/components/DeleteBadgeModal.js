import React from "react";

import Modal from "./Modal.js";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="delete-badge-modal">
        <h3>Estas seguro que quieres borrar el badge?</h3>
        <p>Estas a punto de borrar el badge</p>
        <div className="buttons">
          <button onClick={props.deleteBadge} className="btn btn-danger mr-4">
            Delete
          </button>
          <button onClick={props.onClose} className="btn btn-primary ">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
