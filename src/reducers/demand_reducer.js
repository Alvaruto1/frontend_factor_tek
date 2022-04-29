import { ADD_DEMAND } from "../actions/demand_actions";

export default function foo(state = null, action) {
  switch (action.type) {
    case ADD_DEMAND:
      const data = action.payload;
      return { ...state, data };
    default:
      return state;
  }
}

