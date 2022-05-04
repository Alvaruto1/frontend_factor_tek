import React from "react";
import Swal from "sweetalert2";
import Form from "./Form";

export default function GroupButtonsCRUD(props) {
  const { object, functions } = props;

  const onClickDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        functions.delete(object.id);
        Swal.fire("Deleted!", "Your register has been deleted.", "success");
      }
    });
  };
  return (
    <div className="d-flex">
      <button
        className="btn btn-warning m-1"
        onClick={() => {
          functions.showModal();
          functions.childrenModal(
            <Form
              object={object}
              closeModal={() => functions.setShowModal(false)}
            />
          );
        }}
      >
        <i style={{ fontSize: "20px" }} className="bi bi-pencil"></i>
      </button>
      <button className="btn btn-danger m-1" onClick={onClickDelete}>
        <i style={{ fontSize: "20px" }} className="bi bi-x-circle"></i>
      </button>
    </div>
  );
}
