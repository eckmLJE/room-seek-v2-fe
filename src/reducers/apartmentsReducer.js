const getBedrooms = (apartments, id) => {
  const apartment = apartments.find(apartment => apartment.id === id);
  return apartment.bedrooms;
};

const apartmentsReducer = (
  state = {
    apartments: [],
    currentApartment: null,
    currentBedrooms: [],
    currentBedroom: null
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
    case "SET_CURRENT_BEDROOM":
      return {
        ...state,
        currentBedroom: action.br
      };
    default:
      return state;
  }
};

export default apartmentsReducer;
