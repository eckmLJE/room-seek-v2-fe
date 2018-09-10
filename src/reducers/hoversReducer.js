const hoversReducer = (
  state = {
    hover: false,
    apt: 5,
    br: null,
    x: null,
    y: null
  },
  action
) => {
  switch (action.type) {
    case "ENABLE_HOVER_CARD":
      return {
        ...state,
        hover: true,
        apt: action.apt,
        br: action.br
      };
    case "UPDATE_HOVER_XY":
      return {
        ...state,
        x: action.x,
        y: action.y
      };
    case "DISABLE_HOVER_CARD":
      return {
        ...state,
        hover: false,
        apt: null,
        br: null
      };
    default:
      return state;
  }
};

export default hoversReducer;
