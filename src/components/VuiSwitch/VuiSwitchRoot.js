import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export default styled(Switch)(({ theme, ownerState }) => {
  const { palette, borders, boxShadows } = theme;
  const { color } = ownerState;
  const { white, gradients } = palette;

  return {
    "& .MuiSwitch-switchBase": {
      "&.Mui-checked": {
        color: white.main,
        "& + .MuiSwitch-track": {
          background: gradients[color].main,
          opacity: 1,
        },
      },
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#1a1f37", // Warna Navy gelap khas Vision UI
      borderRadius: borders.borderRadius.lg,
    },
  };
});