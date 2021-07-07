import React, { useState } from "react";

import Modal from "./Modal.js";

//custom hook, cuenta no puede ser mayor a 40
function useCountState(max) {
  //hook
  const [cuenta, setCuenta] = useState(0);
  if (cuenta > max) {
    setCuenta(0);
  }
  return [cuenta, setCuenta];
}

function DeleteBadgeModal(props) {
  //custom hook, cuenta no puede ser mayor a 40
  const [cuenta, setCuenta] = useCountState(40);

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
          <p>la cuenta es {cuenta}</p>
          <button
            onClick={() => setCuenta(cuenta + 1)}
            className="btn btn-primary"
          >
            {" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
