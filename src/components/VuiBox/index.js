import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBoxRoot from "./VuiBoxRoot";

function mergeSx(styleSx, sx) {
  if (typeof sx === "function") return (theme) => ({ ...styleSx, ...sx(theme) });
  if (Array.isArray(sx)) return [styleSx, ...sx];
  return { ...styleSx, ...(sx || {}) };
}

const VuiBox = forwardRef(
  (
    {
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow,
      sx,
      display,
      alignItems,
      justifyContent,
      flexDirection,
      textAlign,
      position,
      top,
      right,
      bottom,
      left,
      width,
      height,
      p,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      m,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      gap,
      overflow,
      ...rest
    },
    ref
  ) => {
    const styleSx = {
      display,
      alignItems,
      justifyContent,
      flexDirection,
      textAlign,
      position,
      top,
      right,
      bottom,
      left,
      width,
      height,
      p,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      m,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      gap,
      overflow,
    };

    Object.keys(styleSx).forEach((key) => styleSx[key] === undefined && delete styleSx[key]);

    return (
      <VuiBoxRoot
        {...rest}
        ref={ref}
        sx={mergeSx(styleSx, sx)}
        ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }}
      />
    );
  }
);

VuiBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
};

VuiBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
};

export default VuiBox;