import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDemands,
  deleteDemand,
  editDemand,
} from "../actions/demand_actions";
import GroupButtonsCRUD from "../components/Demands/GroupButtonsCRUD";
import Table from "../components/Demands/Table";

export default function Demands(props) {
  const {showModal, childrenModal, setShowModal} = props
  const demands = useSelector((state) => {
    return state.demand;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDemands());
  }, []);
  const CRUDFuctions = {
    edit: (id, demand) => {
      dispatch(editDemand(id, demand));
      dispatch(getAllDemands());
    },
    delete: (id) => {
      dispatch(deleteDemand(id)).then(() => {
        dispatch(getAllDemands());
      });
    },
    showModal: showModal,
    setShowModal: setShowModal,
    childrenModal: childrenModal
  };
  return (
    <>
      <div className="p-5 m-2">
        <h1 className="text-center">Demands</h1>
        <hr />
        <div className="row">
          <div className="table-responsive h-75">
            <Table className="h-75"
              rows={demands ? demands.demands.demands : []}
              Crud={GroupButtonsCRUD}
              functions={CRUDFuctions}
            ></Table>
          </div>
        </div>
      </div>
    </>
  );
}
