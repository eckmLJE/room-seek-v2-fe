import { combineReducers } from "redux";
import apartmentsReducer from "./apartmentsReducer";
import filtersReducer from "./filtersReducer";

export const rootReducer = combineReducers({
  apartments: apartmentsReducer,
  filters: filtersReducer
});
