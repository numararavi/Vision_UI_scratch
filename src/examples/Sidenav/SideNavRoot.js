import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const SidenavRoot = styled(Drawer)(({ theme, ownerState }) => {
  const { transparentSidenav, miniSidenav } = ownerState;
  const { transitions, breakpoints, functions, palette } = theme;
  const { pxToRem, linearGradient } = functions;
  const { gradients, transparent } = palette;

  return {
    width: 250,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    "& .MuiDrawer-paper": {
      width: 250,
      border: 0,
      background: transparentSidenav
        ? transparent.main
        : linearGradient(gradients.sidenav.main, gradients.sidenav.state, gradients.sidenav.deg),
      backdropFilter: transparentSidenav ? "unset" : "blur(120px)",
      overflowX: "hidden",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
      [breakpoints.up("xl")]: {
        width: miniSidenav ? pxToRem(96) : 250,
      },
    },
  };
});

export default SidenavRoot;
