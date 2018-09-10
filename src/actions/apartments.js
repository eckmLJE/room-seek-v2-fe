export const getApartments = apartments => ({
  type: "GET_APARTMENTS",
  apartments
});

export const setCurrentApartment = id => {
  return {
    type: "SET_CURRENT_APARTMENT",
    id
  };
};

export const setCurrentBedroom = br => ({
  type: "SET_CURRENT_BEDROOM",
  br
});
