import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBadgeRoot from "./VuiBadgeRoot";

const VuiBadge = forwardRef(({ color, variant, size, circular, indicator, border, children, ...rest }, ref) => (
  <VuiBadgeRoot
    {...rest}
    ref={ref}
    ownerState={{ color, variant, size, circular, indicator, border }}
  >
    {children}
  </VuiBadgeRoot>
));

VuiBadge.defaultProps = {
  color: "info",
  variant: "gradient",
  size: "md",
  circular: false,
  indicator: false,
  border: false,
};

export default VuiBadge;