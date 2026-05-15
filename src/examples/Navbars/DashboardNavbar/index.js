import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Menu, Icon } from "@mui/material";

import VuiBox from "../../../components/VuiBox";
import VuiTypography from "../../../components/VuiTypography";
import VuiInput from "../../../components/VuiInput";
import { useVisionUIController, setTransparentNavbar, setMiniSidenav, setOpenConfigurator } from "../../../context";
import { navbar, navbarContainer, navbarRow, navbarIconButton, navbarMobileMenu } from "./styles";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState("static");
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
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
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const renderMenu = () => (
    <Menu anchorEl={openMenu} anchorReference={null} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} open={Boolean(openMenu)} onClose={handleCloseMenu} sx={{ mt: 2 }}>
      <VuiBox px={2} py={1}>Notification menu</VuiBox>
    </Menu>
  );

  return (
    <AppBar position={absolute ? "absolute" : navbarType} color="inherit" sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}>
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <VuiBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            Pages / {route[route.length - 1] || "Dashboard"}
          </VuiTypography>
        </VuiBox>
        {isMini ? null : (
          <VuiBox sx={(theme) => navbarRow(theme, { isMini })}>
            <VuiBox pr={1}>
              <VuiInput placeholder="Type here..." sx={{ backgroundColor: "info.main !important" }} />
            </VuiBox>
            <VuiBox color={light ? "white" : "inherit"}>
              <Link to="/authentication/sign-in" style={{ textDecoration: "none", color: "inherit" }}>
                <IconButton sx={navbarIconButton} size="small">
                  <Icon sx={{ color: light ? "white" : "dark" }}>account_circle</Icon>
                  <VuiTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>Sign in</VuiTypography>
                </IconButton>
              </Link>
              <IconButton size="small" color="inherit" sx={navbarMobileMenu} onClick={handleMiniSidenav}>
                <Icon>{miniSidenav ? "menu_open" : "menu"}</Icon>
              </IconButton>
              <IconButton size="small" color="inherit" sx={navbarIconButton} onClick={handleConfiguratorOpen}>
                <Icon>settings</Icon>
              </IconButton>
              <IconButton size="small" color="inherit" sx={navbarIconButton} onClick={handleOpenMenu}>
                <Icon>notifications</Icon>
              </IconButton>
              {renderMenu()}
            </VuiBox>
          </VuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.defaultProps = { absolute: false, light: false, isMini: false };
DashboardNavbar.propTypes = { absolute: PropTypes.bool, light: PropTypes.bool, isMini: PropTypes.bool };

export default DashboardNavbar;
