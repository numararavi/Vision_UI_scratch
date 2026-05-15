import { forwardRef } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const VuiInput = forwardRef(({ icon, ...rest }, ref) => <TextField ref={ref} fullWidth variant="outlined" {...rest} />);

VuiInput.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default VuiInput;
