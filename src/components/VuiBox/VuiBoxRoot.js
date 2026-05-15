import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows, transitions } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow } = ownerState;

  const { gradients, transparent, white } = palette;
  const { linearGradient } = functions;

  const validGradients = ["primary", "info", "success", "warning", "error", "dark"];

  let backgroundValue = bgColor === "transparent" ? transparent.main : palette[bgColor]?.main || bgColor;

  if (variant === "gradient") {
    backgroundValue = validGradients.includes(bgColor)
      ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
      : linearGradient(gradients.info.main, gradients.info.state);
  }

  return {
    opacity,
    background: backgroundValue,
    color: palette[color]?.main || color,
    borderRadius: borders.borderRadius[borderRadius] || borderRadius,
    boxShadow: boxShadows[shadow] || shadow,
    transition: transitions.create(["box-shadow", "transform", "opacity"], { duration: transitions.duration.shorter }),
    willChange: "transform",
  };
});
