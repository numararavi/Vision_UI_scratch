import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import VuiBox from "../../components/VuiBox";
import VuiTypography from "../../components/VuiTypography";
import VuiButton from "../../components/VuiButton";
import VuiSwitch from "../../components/VuiSwitch";
import { useVisionUIController, setOpenConfigurator, setTransparentSidenav, setFixedNavbar, setSidenavColor } from "../../context";
import ConfiguratorRoot from "./ConfiguratorRoot";

function Configurator() {
  const [controller, dispatch] = useVisionUIController();
  const { openConfigurator, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "info", "success", "warning", "error"];

  useEffect(() => {
    function handleDisabled() {
      setDisabled(window.innerWidth <= 1200);
    }

    window.addEventListener("resize", handleDisabled);
    handleDisabled();
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

  const sidenavTypeButtonsStyles = {
    height: 42,
    minHeight: 42,
    boxShadow: "none",
  };

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <VuiBox backgroundColor="black" display="flex" justifyContent="space-between" alignItems="baseline" pt={3} pb={0.8} px={3}>
        <VuiBox>
          <VuiTypography color="white" variant="h5" fontWeight="bold">Vision UI Configurator</VuiTypography>
          <VuiTypography variant="body2" color="white" fontWeight="bold">See our dashboard options.</VuiTypography>
        </VuiBox>
        <Icon sx={{ color: "white", cursor: "pointer", mt: 2 }} onClick={handleCloseConfigurator}>close</Icon>
      </VuiBox>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />

      <VuiBox pt={1.25} pb={3} px={3}>
        <VuiBox>
          <VuiTypography variant="h6" color="white">Sidenav Colors</VuiTypography>
          <VuiBox display="flex" gap={1} mt={2}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={{
                  width: 24,
                  height: 24,
                  p: 0,
                  border: "1px solid white",
                  backgroundColor: color,
                  borderColor: sidenavColor === color ? "#111" : "white",
                }}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </VuiBox>
        </VuiBox>

        {window.innerWidth >= 1440 && (
          <VuiBox mt={3} lineHeight={1}>
            <VuiTypography variant="h6" color="white">Sidenav Type</VuiTypography>
            <VuiTypography variant="button" color="text" fontWeight="regular">Choose between 2 different sidenav types.</VuiTypography>
            <VuiBox sx={{ display: "flex", mt: 2 }}>
              <VuiButton color="info" variant={transparentSidenav ? "contained" : "outlined"} onClick={handleTransparentSidenav} disabled={disabled} fullWidth sx={{ mr: 1, ...sidenavTypeButtonsStyles }}>
                Transparent
              </VuiButton>
              <VuiButton color="info" variant={transparentSidenav ? "outlined" : "contained"} onClick={handleWhiteSidenav} disabled={disabled} fullWidth sx={sidenavTypeButtonsStyles}>
                Opaque
              </VuiButton>
            </VuiBox>
          </VuiBox>
        )}

        <VuiBox mt={3} mb={2} lineHeight={1}>
          <VuiTypography variant="h6" color="white">Navbar Fixed</VuiTypography>
          <VuiSwitch checked={fixedNavbar} onChange={handleFixedNavbar} color="info" />
        </VuiBox>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />

        <VuiBox mt={3} mb={2}>
          <VuiBox mb={2}>
            <VuiButton component="a" href="https://www.creative-tim.com/product/vision-ui-dashboard-react" target="_blank" rel="noreferrer" color="info" variant="contained" fullWidth>
              FREE DOWNLOAD
            </VuiButton>
          </VuiBox>
          <VuiBox mb={2}>
            <VuiButton component="a" href="https://www.creative-tim.com/learning-lab/react/quick-start/vision-ui-dashboard/" target="_blank" rel="noreferrer" color="info" variant="outlined" fullWidth>
              VIEW DOCUMENTATION
            </VuiButton>
          </VuiBox>
          <VuiBox display="flex" justifyContent="center">
            <VuiBox mr={1.5}>
              <VuiButton component="a" href="https://twitter.com/intent/tweet?url=https://www.creative-tim.com/product/vision-ui-dashboard-react" target="_blank" rel="noreferrer" color="dark">
                <TwitterIcon /> &nbsp; Tweet
              </VuiButton>
            </VuiBox>
            <VuiButton component="a" href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/vision-ui-dashboard-react" target="_blank" rel="noreferrer" color="dark">
              <FacebookIcon />
            </VuiButton>
          </VuiBox>
          <VuiBox mt={3} textAlign="center">
            <VuiTypography variant="h6" color="white">Thank you for sharing!</VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
