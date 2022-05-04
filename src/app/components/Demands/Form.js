import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { editDemand, getAllDemands } from "../../actions/demand_actions";

export default function Form(props) {
  const { object, closeModal } = props;
  const [referred, isReferred] = useState(false);
  const [aplicant, setAplicant] = useState(object.applicant_names);
  const [email, setEmail] = useState(object.company_email);
  const [phone, setPhone] = useState(object.phone_number);
  const [name, setName] = useState(object.company_name);
  const [solutionType, setSolutionType] = useState(object.solution_type);
  const [refferedBy, setRefferedBy] = useState(object.reffered_by);
  const [comment, setComment] = useState(object.additional_comments);
  useEffect(() => {
    fillForm();
    if (object.reffered_by !== "") {
      isReferred(true);
    }
  }, [object]);
  const dispatch = useDispatch();
  const onSubmitForm = (e) => {
    e.preventDefault();
    const demand = {
      applicant_names: aplicant,
      company_name: name,
      company_email: email,
      phone_number: phone,
      solution_type: solutionType,
      reffered_by: refferedBy,
      additional_comments: comment,
    };
    dispatch(editDemand(object.id, demand))
      .then(() => {
        Swal.fire({
          text: "Updated demand with success!",
          icon: "success",
        });
        clearForm();
        dispatch(getAllDemands());
        closeModal();
      })
      .catch(() => {
        Swal.fire({
          text: "Error sending demand!",
          icon: "error",
        });
      });
  };

  const onChangeRadioSolution = (e) => {
    setSolutionType(e.target.value);
  };
  const fillForm = () => {
    setAplicant(object.applicant_names);
    setEmail(object.company_email);
    setPhone(object.phone_number);
    setName(object.company_name);
    setSolutionType(object.solution_type);
    setRefferedBy(object.reffered_by);
    setComment(object.additional_comments);
  };

  const clearForm = () => {
    setAplicant("");
    setEmail("");
    setPhone("");
    setName("");
    setSolutionType("");
    setRefferedBy("");
    setComment("");
  };

  return (
    <form className="bg-white" onSubmit={onSubmitForm}>
      <div className="row m-2">
        <div className="col">
          <label htmlFor="names" className="form-label">
            Names
          </label>
          <input
            required
            type="text"
            value={aplicant}
            onChange={(e) => setAplicant(e.target.value)}
            className="form-control"
            id="names"
            placeholder="First & Last Name"
          ></input>
        </div>
      </div>
      <div className="row m-2">
        <div className="col">
          <label htmlFor="company_name" className="form-label">
            Company Name
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="company_name"
            placeholder="Full Legal Name"
          ></input>
        </div>
      </div>
      <div className="row m-2">
        <div className="col">
          <label htmlFor="phone_number" className="form-label">
            Phone Number
          </label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            id="phone_number"
            placeholder="(000)000-0000"
            pattern="\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
          ></input>
        </div>
        <div className="col">
          <label htmlFor="company_email" className="form-label">
            Company Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="company_email"
            placeholder="name@company.com"
          ></input>
        </div>
      </div>
      <div className="row m-2">
        <div className="col">
          <label className="form-label">Solution Type</label>
          <div className="row">
            <div className="form-check col">
              <input
                required
                className="form-check-input"
                type="radio"
                name="solution_type"
                id="option1"
                value="Freight_Factoring"
                onChange={onChangeRadioSolution}
                checked={solutionType === "Freight_Factoring"}
              />
              <label className="form-check-label" htmlFor="option1">
                Freight Factoring
              </label>
            </div>
            <div className="form-check col">
              <input
                required
                className="form-check-input"
                type="radio"
                name="solution_type"
                id="option2"
                value="Freight_Factoring_Fuel_Card"
                checked={solutionType === "Freight_Factoring_Fuel_Card"}
                onChange={onChangeRadioSolution}
              />
              <label className="form-check-label" htmlFor="option2">
                Freight Factoring + Fuel Card
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col row">
          <div className="col-xxl-2">
            <label className="form-label">Referred</label>
          </div>
          <div className="col row">
            <div className="form-check col-xxl-2">
              <input
                required
                className="form-check-input"
                type="radio"
                name="referred"
                id="yes"
                checked={referred}
                onChange={() => isReferred(true)}
              />
              <label className="form-check-label" htmlFor="yes">
                yes
              </label>
            </div>
            <div className="form-check col-xxl-2">
              <input
                required
                className="form-check-input"
                type="radio"
                name="referred"
                id="no"
                checked={!referred}
                onChange={() => isReferred(false)}
              />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      {referred ? (
        <div className="row m-2">
          <div className="col">
            <input
              type="text"
              value={refferedBy}
              onChange={(e) => setRefferedBy(e.target.value)}
              className="form-control"
              id="reffered"
              placeholder="Who did refer you?"
            ></input>
          </div>
        </div>
      ) : null}
      <div className="row m-2">
        <div className="col">
          <label htmlFor="additional_comments" className="form-label">
            Additional comments
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            className="form-control"
            id="additional_comments"
          ></textarea>
        </div>
      </div>
      <div className="row m-2">
        <div className="d-grid col justify-content-end">
          <button className="btn btn-warning text-white" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
