import { combineReducers } from "redux";

import apartmentsReducer from "./apartmentsReducer";
import filtersReducer from "./filtersReducer";
import hoversReducer from "./hoversReducer";

export const rootReducer = combineReducers({
  apartments: apartmentsReducer,
  filters: filtersReducer,
  hovers: hoversReducer
});
