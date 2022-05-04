import React, { useState } from "react";

export default function Modal(props) {
  const { showModal, setShowModal, children } = props;
  return (
    <div
      className="modal"
      style={{
        display: showModal ? "block" : "none",
        background: "rgba(236, 234, 243, 0.9)",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
         
        </div>
      </div>
    </div>
  );
}
