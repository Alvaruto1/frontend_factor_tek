export const ADD_DEMAND = "ADD_DEMAND";
export const DELETE_DEMAND = "DELETE_DEMAND";
export const EDIT_DEMAND = "EDIT_DEMAND";
export const GET_ALL_DEMANDS = "ALL_DEMANDS";

const rootURL = "http://localhost:5000";

export function addDemand(demand) {
  const url = `${rootURL}/demands`;
  const request = fetch(url, {
    method: "POST",
    body: JSON.stringify(demand),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      request
        .then((response) => {
          return response;
        })
        .then((data) => {
          dispatch({
            type: ADD_DEMAND,
            payload: data,
          });
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export function editDemand(demand_id, demand) {
  const url = `${rootURL}/demands/${demand_id}`;
  const request = fetch(url, {
    method: "PUT",
    body: JSON.stringify(demand),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      request
        .then((response) => {
          return response;
        })
        .then((data) => {
          dispatch({
            type: EDIT_DEMAND,
            payload: data,
          });
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export function deleteDemand(demand_id) {
  const url = `${rootURL}/demands/${demand_id}`;
  const request = fetch(url, {
    method: "DELETE",
  });
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      request
        .then((response) => {          
          return response;
        })
        .then((data) => {
          dispatch({
            type: DELETE_DEMAND,
            payload: data,
          });
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export function getAllDemands() {
  const url = `${rootURL}/demands`;
  const request = fetch(url, {
    method: "GET",
  });

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      request
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({
            type: GET_ALL_DEMANDS,
            payload: data,
          });
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
