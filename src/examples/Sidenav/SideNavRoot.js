import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const SidenavRoot = styled(Drawer)(({ theme, ownerState }) => {
  const { transparentSidenav, miniSidenav } = ownerState;
  const { transitions, breakpoints, functions, palette } = theme;
  const { pxToRem, linearGradient } = functions;
  const { gradients, transparent } = palette;

  const sidebarWidth = 250;

  return {
    width: sidebarWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    "& .MuiDrawer-paper": {
      width: sidebarWidth,
      border: 0,
      background: transparentSidenav
        ? transparent.main
        : linearGradient(gradients.sidenav.main, gradients.sidenav.state, gradients.sidenav.deg),
      backdropFilter: transparentSidenav ? "unset" : "blur(120px)",
      overflowX: "hidden",
      
      // LOGIKA GESER (Transform)
      transform: miniSidenav ? `translateX(${pxToRem(-300)})` : "translateX(0)",
      
      transition: transitions.create(["transform", "width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
      
      [breakpoints.up("xl")]: {
        width: sidebarWidth,
      },
    },
  };
});

export default SidenavRoot;