import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const VuiTypographyRoot = styled(Typography)(({ ownerState }) => {
  const { opacity, textTransform, verticalAlign } = ownerState || {};

  return {
    opacity,
    textTransform,
    verticalAlign,
  };
});

export default VuiTypographyRoot;
