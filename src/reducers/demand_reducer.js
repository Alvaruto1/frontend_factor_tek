import {
  ADD_DEMAND,
  GET_ALL_DEMANDS,
  DELETE_DEMAND,
  EDIT_DEMAND
} from "../app/actions/demand_actions";

export default function foo(state = null, action) {
  switch (action.type) {
    case ADD_DEMAND:
      const data = action.payload;
      return { ...state, data };
    case GET_ALL_DEMANDS:
      const demands = action.payload;
      return { ...state, demands };
    case EDIT_DEMAND:
      return { ...state };
    case DELETE_DEMAND:
      return { ...state };
    default:
      return state;
  }
}
