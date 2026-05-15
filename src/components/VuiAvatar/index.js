import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiAvatarRoot from "./VuiAvatarRoot";

const VuiAvatar = forwardRef(({ size, shadow, bgColor, ...rest }, ref) => (
  <VuiAvatarRoot ref={ref} {...rest} />
));

VuiAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

VuiAvatar.propTypes = {
  bgColor: PropTypes.string,
  size: PropTypes.string,
  shadow: PropTypes.string,
};

export default VuiAvatar;
