import currentUser from "./currentUser";
import counter from "./counter";
import tableSettings from "./tableReducers";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    currentUser,
    counter,
    tableSettings,
});

export default rootReducer;