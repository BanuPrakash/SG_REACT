import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import contactReducer from "./contactReducer";

// root reducer
export default combineReducers({
    profile: profileReducer,
    contacts: contactReducer
})