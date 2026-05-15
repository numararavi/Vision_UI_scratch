import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

export default styled(LinearProgress)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { color, value } = ownerState;
  const { gradients } = palette;
  const { linearGradient } = functions;

  return {
    "& .MuiLinearProgress-bar": {
      background: linearGradient(gradients[color].main, gradients[color].state),
      borderRadius: "4px",
    },
    backgroundColor: "#1a1f37",
    borderRadius: "4px",
  };
});