import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// @mui material components
import { AppBar, Toolbar, IconButton, Breadcrumbs } from "@mui/material";

// @mui icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";

// Vision UI Dashboard React context
import { useVisionUIController, setTransparentNavbar, setMiniSidenav } from "context";

// Custom styles
import { navbar, navbarContainer, navbarRow, navbarIconButton } from "./styles";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState("static");
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar } = controller;
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    setNavbarType(fixedNavbar ? "sticky" : "static");
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }
    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => ({
        ...navbar(theme, { transparentNavbar, absolute, light }),
        zIndex: 1100,
      })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        {/* SISI KIRI: Breadcrumbs dengan SVG Icons */}
        <VuiBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <VuiBox display="flex" flexDirection="column">
            <Breadcrumbs sx={{ "& .MuiBreadcrumbs-separator": { color: "#fff" } }}>
              <Link to="/">
                <VuiBox display="flex" alignItems="center">
                  <HomeIcon sx={{ color: "#fff", fontSize: "18px", mt: -0.5 }} />
                </VuiBox>
              </Link>
              {route.map((el, index) => (
                <VuiTypography
                  key={el}
                  variant="caption"
                  color="white"
                  opacity={index === route.length - 1 ? 1 : 0.6}
                  sx={{ textTransform: "capitalize", lineHeight: 1 }}
                >
                  {el}
                </VuiTypography>
              ))}
            </Breadcrumbs>
            <VuiTypography variant="button" color="white" fontWeight="bold" textTransform="capitalize">
              {route[route.length - 1] || "Dashboard"}
            </VuiTypography>
          </VuiBox>
        </VuiBox>

        {/* SISI KANAN: Tools berkumpul di pojok kanan */}
        {isMini ? null : (
          <VuiBox sx={(theme) => navbarRow(theme, { isMini })}>
            <VuiBox display="flex" alignItems="center">
              
              {/* 1. Search Bar */}
              <VuiBox pr={1}>
                <VuiInput
                  placeholder="Type here..."
                  size="small"
                  sx={{ backgroundColor: "#ffffff !important" }}
                  startAdornment={
                    <VuiBox mr={1} display="flex" alignItems="center">
                      <SearchIcon sx={{ color: "#fff", fontSize: "18px" }} />
                    </VuiBox>
                  }
                />
              </VuiBox>

              <VuiBox color="white" display="flex" alignItems="center">
                {/* 2. Sign In */}
                <Link to="/authentication/sign-in" style={{ textDecoration: "none" }}>
                  <IconButton sx={navbarIconButton} size="small">
                    <AccountCircleIcon sx={{ color: "#fff", mr: 0.5 }} />
                    <VuiTypography variant="button" fontWeight="medium" color="white">
                      Sign in
                    </VuiTypography>
                  </IconButton>
                </Link>

                {/* 3. Tombol Burger (Toggle Sidenav) */}
                <IconButton size="small" color="inherit" sx={navbarIconButton} onClick={handleMiniSidenav}>
                  {miniSidenav ? (
                    <MenuIcon sx={{ color: "#fff" }} />
                  ) : (
                    <MenuOpenIcon sx={{ color: "#fff" }} />
                  )}
                </IconButton>

                {/* 4. Settings */}
                <IconButton size="small" color="inherit" sx={navbarIconButton}>
                  <SettingsIcon sx={{ color: "#fff" }} />
                </IconButton>

                {/* 5. Notifications */}
                <IconButton size="small" color="inherit" sx={navbarIconButton}>
                  <NotificationsIcon sx={{ color: "#fff" }} />
                </IconButton>

              </VuiBox>
            </VuiBox>
          </VuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;