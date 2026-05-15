import { forwardRef } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const VuiButton = forwardRef(({ color = "info", variant = "contained", children, ...rest }, ref) => (
  <Button ref={ref} variant={variant} color={color} {...rest}>
    {children}
  </Button>
));

VuiButton.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "light"]),
  variant: PropTypes.oneOf(["text", "outlined", "contained", "gradient"]),
  children: PropTypes.node.isRequired,
};

export default VuiButton;
