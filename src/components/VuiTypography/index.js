import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiTypographyRoot from "./VuiTypograpyRoot";

function mergeSx(styleSx, sx) {
  if (typeof sx === "function") return (theme) => ({ ...styleSx, ...sx(theme) });
  if (Array.isArray(sx)) return [styleSx, ...sx];
  return { ...styleSx, ...(sx || {}) };
}

const VuiTypography = forwardRef((
  { variant, color, fontWeight, opacity, textTransform, verticalAlign, textGradient, children, sx, ...rest },
  ref
) => (
  <VuiTypographyRoot
    {...rest}
    ref={ref}
    sx={mergeSx({ textTransform, verticalAlign }, sx)}
    ownerState={{ variant, color, fontWeight, opacity, textGradient }}
  >
    {children}
  </VuiTypographyRoot>
));

VuiTypography.defaultProps = {
  variant: "body2",
  color: "white",
  fontWeight: false,
  opacity: 1,
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: false,
};

VuiTypography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "button",
    "caption",
    "overline",
  ]),
  color: PropTypes.string,
  fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
  opacity: PropTypes.number,
  textTransform: PropTypes.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  verticalAlign: PropTypes.oneOf(["unset", "baseline", "top", "middle", "bottom", "text-top", "text-bottom"]),
  textGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default VuiTypography;
