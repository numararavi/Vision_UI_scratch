import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// @mui icons - GANTI KE SINI
import SettingsIcon from '@mui/icons-material/Settings';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import BuildIcon from '@mui/icons-material/Build';

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Images
import burceMars from "assets/images/avatar-simmmple.png";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <VuiBox position="relative" sx={{ zIndex: 1100 }}>
      <DashboardNavbar />
      <Card
        sx={{
          px: 3,
          mt: 2,
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <VuiAvatar src={burceMars} variant="rounded" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <VuiBox height="100%" mt={0.5} lineHeight={1}>
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Mark Johnson
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                CEO / Co-Founder
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent" }}
              >
                <Tab 
                  label="OVERVIEW" 
                  icon={<SettingsIcon sx={{ color: "#fff !important" }} />} 
                />
                <Tab 
                  label="TEAMS" 
                  icon={<DocumentScannerIcon sx={{ color: "#fff !important" }} />} 
                />
                <Tab 
                  label="PROJECTS" 
                  icon={<BuildIcon sx={{ color: "#fff !important" }} />} 
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </VuiBox>
  );
}

export default Header;