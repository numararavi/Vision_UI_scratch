export const navbar = () => ({
  p: 2,
  borderRadius: 20,
  background: "rgba(6, 11, 40, 0.8)",
  backdropFilter: "blur(24px)",
});

export const navbarContainer = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const navbarRow = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const navbarIconButton = () => ({
  px: 0.75,
});

export const navbarMobileMenu = ({ breakpoints, palette: { white } }) => ({
  display: "inline-block",
  lineHeight: 0,
  color: white.main,
  [breakpoints.up("xl")]: {
    display: "none",
  },
});
