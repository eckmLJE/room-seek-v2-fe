export const getApartments = apartments => ({
  type: "GET_APARTMENTS",
  apartments
});

export const setCurrentApartment = id => {
  console.log(id);
  return {
    type: "SET_CURRENT_APARTMENT",
    id
  };
};
