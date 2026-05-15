import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const VisionUI = createContext();

VisionUI.displayName = "VisionUIContext";

const initialState = {
  miniSidenav: false,
  transparentSidenav: true,
  sidenavColor: "info",
  transparentNavbar: true,
  fixedNavbar: true,
  openConfigurator: false,
  direction: "ltr",
  layout: "dashboard",
};

const actionTypes = {
  MINI_SIDENAV: "MINI_SIDENAV",
  TRANSPARENT_SIDENAV: "TRANSPARENT_SIDENAV",
  SIDENAV_COLOR: "SIDENAV_COLOR",
  TRANSPARENT_NAVBAR: "TRANSPARENT_NAVBAR",
  FIXED_NAVBAR: "FIXED_NAVBAR",
  OPEN_CONFIGURATOR: "OPEN_CONFIGURATOR",
  DIRECTION: "DIRECTION",
  LAYOUT: "LAYOUT",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.MINI_SIDENAV:
      return { ...state, miniSidenav: action.value };
    case actionTypes.TRANSPARENT_SIDENAV:
      return { ...state, transparentSidenav: action.value };
    case actionTypes.SIDENAV_COLOR:
      return { ...state, sidenavColor: action.value };
    case actionTypes.TRANSPARENT_NAVBAR:
      return { ...state, transparentNavbar: action.value };
    case actionTypes.FIXED_NAVBAR:
      return { ...state, fixedNavbar: action.value };
    case actionTypes.OPEN_CONFIGURATOR:
      return { ...state, openConfigurator: action.value };
    case actionTypes.DIRECTION:
      return { ...state, direction: action.value };
    case actionTypes.LAYOUT:
      return { ...state, layout: action.value };
    default:
      return state;
  }
}

function VisionUIControllerProvider({ children }) {
  const [controller, dispatch] = useReducer(reducer, initialState);

  return <VisionUI.Provider value={[controller, dispatch]}>{children}</VisionUI.Provider>;
}

function useVisionUIController() {
  const context = useContext(VisionUI);

  if (!context) {
    throw new Error("useVisionUIController should be used inside the VisionUIControllerProvider.");
  }

  return context;
}

function setMiniSidenav(dispatch, value) {
  dispatch({ type: actionTypes.MINI_SIDENAV, value });
}

function setTransparentSidenav(dispatch, value) {
  dispatch({ type: actionTypes.TRANSPARENT_SIDENAV, value });
}

function setSidenavColor(dispatch, value) {
  dispatch({ type: actionTypes.SIDENAV_COLOR, value });
}

function setTransparentNavbar(dispatch, value) {
  dispatch({ type: actionTypes.TRANSPARENT_NAVBAR, value });
}

function setFixedNavbar(dispatch, value) {
  dispatch({ type: actionTypes.FIXED_NAVBAR, value });
}

function setOpenConfigurator(dispatch, value) {
  dispatch({ type: actionTypes.OPEN_CONFIGURATOR, value });
}

function setDirection(dispatch, value) {
  dispatch({ type: actionTypes.DIRECTION, value });
}

function setLayout(dispatch, value) {
  dispatch({ type: actionTypes.LAYOUT, value });
}

VisionUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  VisionUIControllerProvider,
  useVisionUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
};
