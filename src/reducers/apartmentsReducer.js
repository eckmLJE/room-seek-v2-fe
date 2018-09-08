const apartmentsReducer = (
  state = {
    apartments: []
  },
  action
) => {
  switch (action.type) {
    case "SET_APARTMENTS":
      return { ...state, apartments: action.apartments };
    default:
      return state;
  }
};

export default apartmentsReducer;
