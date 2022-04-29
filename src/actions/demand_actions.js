export const ADD_DEMAND = "ADD_DEMAND";

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
