export const enableHoverCard = (apt, br) => ({
  type: "ENABLE_HOVER_CARD",
  apt,
  br
});

export const updateHoverXY = (x, y) => ({
    type: "UPDATE_HOVER_XY",
    x,
    y
})

export const disableHoverCard = () => ({
  type: "DISABLE_HOVER_CARD"
});
