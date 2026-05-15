function collapseItem(theme, ownerState) {
  const { palette, transitions, breakpoints, functions } = theme;
  const { active } = ownerState;
  const { pxToRem, rgba } = functions;

  return {
    background: active 
      ? "linear-gradient(135deg, rgba(0, 117, 255, 0.9) 0%, rgba(44, 217, 255, 0.8) 100%)" 
      : "transparent",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    width: "auto",
    padding: `${pxToRem(10)} ${pxToRem(16)}`,
    margin: `${pxToRem(4)} ${pxToRem(16)}`,
    borderRadius: pxToRem(12),
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    transition: transitions.create(["background-color", "box-shadow"], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.shorter,
    }),
    [breakpoints.up("xl")]: {
      margin: `${pxToRem(4)} ${pxToRem(12)}`,
    },
    "&:hover": {
      backgroundColor: active ? "" : rgba(palette.white.main, 0.05),
    },
  };
}

function collapseIconBox(theme, ownerState) {
  const { palette, functions } = theme;
  const { active } = ownerState;
  const { pxToRem } = functions;

  return {
    minWidth: pxToRem(32),
    minHeight: pxToRem(32),
    borderRadius: pxToRem(8),
    display: "grid",
    placeItems: "center",
    background: active ? palette.info.main : "rgba(255, 255, 255, 0.05)",
    transition: "all 300ms linear",
    "& svg, & i": {
      color: "#fff !important",
    },
  };
}

function collapseIcon(theme, ownerState) {
  return {
    color: "#fff !important",
  };
}

function collapseText(theme, ownerState) {
  const { typography, transitions, breakpoints, functions } = theme;
  const { miniSidenav, active } = ownerState;
  const { pxToRem } = functions;

  // Safety check untuk font size agar tidak error 'undefined'
  const fontSize = typography.size ? typography.size.sm : pxToRem(14);

  return {
    marginLeft: pxToRem(10),
    [breakpoints.up("xl")]: {
      opacity: miniSidenav ? 0 : 1,
      maxWidth: miniSidenav ? 0 : "100%",
      marginLeft: miniSidenav ? 0 : pxToRem(10),
    },
    transition: transitions.create(["opacity", "margin"], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.shorter,
    }),
    "& span": {
      fontWeight: active ? (typography.fontWeightBold || "700") : (typography.fontWeightRegular || "400"),
      fontSize: fontSize,
      lineHeight: 0,
      color: "#fff !important", // Teks menu jadi putih solid
    },
  };
}

export { collapseItem, collapseIconBox, collapseIcon, collapseText };