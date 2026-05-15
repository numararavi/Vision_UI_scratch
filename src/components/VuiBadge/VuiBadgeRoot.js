import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

export default styled(Badge)(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme;
  const { color, circular, border, size, indicator, variant } = ownerState;

  const { white, gradients, badgeColors } = palette;
  const { fontWeightBold, size: fontSize } = typography;
  const { borderRadius, borderWidth } = borders;
  const { pxToRem, linearGradient } = functions;

  // Ukuran padding dan font berdasarkan props size
  const paddingValue = size === "lg" ? "0.75em 1em" : "0.55em 0.9em";
  const fontSizeValue = size === "lg" ? fontSize.sm : fontSize.xs;

  return {
    "& .MuiBadge-badge": {
      height: "auto",
      padding: paddingValue,
      fontSize: fontSizeValue,
      fontWeight: fontWeightBold,
      textTransform: "uppercase",
      lineHeight: 1,
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "baseline",
      borderRadius: circular ? borderRadius.section : borderRadius.md,
      border: border ? `${borderWidth[1]} solid ${white.main}` : "none",

      // Logika Warna Gradasi
      background: linearGradient(gradients[color].main, gradients[color].state),
      color: white.main,
    },
  };
});