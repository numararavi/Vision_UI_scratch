import { forwardRef } from "react";
import PropTypes from "prop-types";
import Switch from "@mui/material/Switch";

const VuiSwitch = forwardRef((props, ref) => <Switch ref={ref} {...props} />);

VuiSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error"]),
};

export default VuiSwitch;
