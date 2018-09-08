const getBedrooms = (apartments, id) => {
  const apartment = apartments.find(apartment => apartment.id === id);
  return apartment.bedrooms;
};

const apartmentsReducer = (
  state = {
    apartments: [],
    currentApartment: null,
    currentBedrooms: []
  },
  action
) => {
  switch (action.type) {
    case "GET_APARTMENTS":
      return { ...state, apartments: action.apartments };
    case "SET_CURRENT_APARTMENT":
      return {
        ...state,
        currentApartment: action.id,
        currentBedrooms: getBedrooms(state.apartments, action.id)
      };
    default:
      return state;
  }
};

export default apartmentsReducer;
