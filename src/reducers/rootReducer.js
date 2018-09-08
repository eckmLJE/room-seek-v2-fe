import { combineReducers } from "redux";
import apartmentsReducer from "./apartmentsReducer";

export const rootReducer = combineReducers({
  apartments: apartmentsReducer
});
