const processStringBool = bool => {
  return bool === "true" ? true : false;
};

const filtersReducer = (
  state = {
    maxRent: 1000,
    months: 1,
    petFriendly: "true"
  },
  action
) => {
  switch (action.type) {
    case "SET_RENT_FILTER":
      return { ...state, maxRent: parseInt(action.rent, 10) };
    case "SET_MONTHS_FILTER":
      return { ...state, months: parseInt(action.months, 10) };
    case "SET_PET_FILTER":
      return { ...state, petFriendly: processStringBool(action.bool) };
    default:
      return state;
  }
};

export default filtersReducer;
