import { forwardRef } from "react";
import PropTypes from "prop-types";

// Custom styles for VuiProgress
import VuiProgressRoot from "components/VuiProgress/VuiProgressRoot";

const VuiProgress = forwardRef(({ color, value, ...rest }, ref) => (
  <VuiProgressRoot
    {...rest}
    ref={ref}
    variant="determinate"
    value={value}
    ownerState={{ color, value }}
  />
));

VuiProgress.defaultProps = {
  color: "info",
  value: 0,
};

VuiProgress.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "light", "dark"]),
  value: PropTypes.number,
};

export default VuiProgress;