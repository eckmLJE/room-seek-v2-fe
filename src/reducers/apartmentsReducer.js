const apartmentsReducer = (
  state = {
    apartments: [],
    currentApartment: 1
  },
  action
) => {
  switch (action.type) {
    case "GET_APARTMENTS":
      return { ...state, apartments: action.apartments };
    case "SET_CURRENT_APARTMENT":
      return { ...state, currentApartment: action.id };
    default:
      return state;
  }
};

export default apartmentsReducer;
