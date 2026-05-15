import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Vision UI Dashboard React icons
import { IoCube } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";

// Vision UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // Fungsi untuk mengatur orientasi tab berdasarkan ukuran layar
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <VuiBox position="relative">
      <DashboardNavbar light />
      <VuiBox height="220px" />
      <Card
        sx={{
          padding: "20px",
          margin: "-64px 24px 0",
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(6, 11, 38, 0.8)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <VuiAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <VuiBox height="100%" mt={0.5} lineHeight={1}>
              <VuiTypography variant="h5" color="white" fontWeight="medium">
                Mark Johnson
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="medium">
                CEO / Co-Founder
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent" }}
              >
                <Tab label="OVERVIEW" icon={<IoCube size="16px" color="white" />} />
                <Tab label="TEAMS" icon={<IoDocument size="16px" color="white" />} />
                <Tab label="PROJECTS" icon={<IoBuild size="16px" color="white" />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </VuiBox>
  );
}

export default Header;