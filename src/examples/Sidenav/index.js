import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Divider, List, Icon } from "@mui/material";

import VuiBox from "../../components/VuiBox";
import VuiTypography from "../../components/VuiTypography";
import VuiButton from "../../components/VuiButton";
import { useVisionUIController, setMiniSidenav, setTransparentSidenav } from "../../context";

import SideNavRoot from "./SideNavRoot";
import SideNavCollapse from "./SideNavCollapse";
import SideNavCard from "./SideNavCard";
import sidenavLogoLabel from "./Styles/sidenav";

function Sidenav({ color, brandName, routes, ...rest }) {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const { pathname } = useLocation();
  const collapseName = pathname.split("/").slice(1)[0];

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth < 1440) setTransparentSidenav(dispatch, false);
  }, [dispatch]);

  const renderRoutes = routes.map(({ type, name, icon, title, key, route, href }) => {
    if (type === "collapse") {
      return (
        <SideNavCollapse
          key={key}
          name={name}
          icon={icon}
          active={key === collapseName}
          route={route}
          href={href}
        />
      );
    }

    if (type === "title") {
      return (
        <VuiTypography
          key={key}
          color="white"
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
          sx={{ opacity: miniSidenav ? 0 : 0.72, transition: "opacity 180ms ease" }}
        >
          {title}
        </VuiTypography>
      );
    }

    if (type === "divider") return <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 1 }} key={key} />;
    return null;
  });

  return (
    <SideNavRoot variant="permanent" ownerState={{ transparentSidenav, miniSidenav }} onMouseEnter={rest.onMouseEnter} onMouseLeave={rest.onMouseLeave}>
      <VuiBox pt={3.25} pb={1} px={3} textAlign="center" sx={{ overflow: "unset !important" }}>
        <VuiBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <VuiTypography variant="h6" color="text">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </VuiTypography>
        </VuiBox>

        <VuiBox component={NavLink} to="/dashboard" display="flex" alignItems="center" sx={{ textDecoration: "none" }}>
          <VuiBox
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="2.25rem"
            height="2.25rem"
            borderRadius="md"
            sx={{
              background: "linear-gradient(135deg, rgba(0,117,255,0.95) 0%, rgba(44,217,255,0.85) 100%)",
              boxShadow: "0 8px 22px rgba(0,117,255,0.35)",
            }}
          >
            <Icon sx={{ color: "white", fontSize: 18 }}>space_dashboard</Icon>
          </VuiBox>

          <VuiBox display="flex" flexDirection="column" justifyContent="center" ml={1.1} sx={(theme) => sidenavLogoLabel(theme, { transparentSidenav })}>
            <VuiTypography variant="button" textGradient color="logo" fontWeight="bold">
              {brandName}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", mx: 2, mb: 1 }} />

      <List sx={{ px: 0.5 }}>{renderRoutes}</List>

      <VuiBox mx={1.5} mt="auto" mb={1.75}>
        <SideNavCard color={color} />
        <VuiBox mt={1.25}>
          <VuiButton
            component="a"
            href="https://creative-tim.com/product/vision-ui-dashboard-pro-react"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color={color}
            fullWidth
          >
            Upgrade to PRO
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </SideNavRoot>
  );
}

Sidenav.defaultProps = { color: "info" };
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;