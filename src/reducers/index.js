import { combineReducers } from "redux";
import demand_reducer from "./demand_reducer";


const rootReducer = combineReducers({
    demand: demand_reducer
})

export default rootReducer;