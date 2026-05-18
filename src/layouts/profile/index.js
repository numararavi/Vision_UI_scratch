import React from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import BuildIcon from "@mui/icons-material/Build";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Local Assets (Sesuaikan dengan path project scratch kamu)
import bgProfile from "assets/images/background-card-reports.png";
import avatar1 from "assets/images/avatar-simmmple.png";
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";

function Profile() {
  return (
    <>
      <DashboardNavbar />
      <VuiBox position="relative" mt={8}>
        {/* Banner Background Atas */}
        <VuiBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="18.75rem"
          borderRadius="20px"
          sx={{
            backgroundImage: `url(${bgProfile})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
            mx: 3,
          }}
        />

        {/* Header Informasi User (Glassmorphism) */}
        <Card
          sx={{
            p: 2,
            mx: 6,
            mt: -8,
            mb: 4,
            background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.69) 92.1%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            backdropFilter: "blur(20px)",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <VuiBox width="74px" height="74px" borderRadius="16px" overflow="hidden">
                <img src={avatar1} alt="profile-image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </VuiBox>
            </Grid>
            <Grid item xs={12} sm={"auto"}>
              <VuiBox display="flex" flexDirection="column">
                <VuiTypography variant="h5" color="white" fontWeight="bold">
                  Mark Johnson
                </VuiTypography>
                <VuiTypography variant="button" color="text" fontWeight="regular">
                  CEO / Co-Founder
                </VuiTypography>
              </VuiBox>
            </Grid>
            
            {/* Tombol Navigasi Kanan Atas */}
            <Grid item xs={12} md="auto" sx={{ ml: "auto" }}>
              <Grid container spacing={1}>
                <Grid item>
                  <Button startIcon={<SettingsIcon />} variant="contained" color="info" sx={{ borderRadius: "12px" }}>
                    OVERVIEW
                  </Button>
                </Grid>
                <Grid item>
                  <Button startIcon={<GroupIcon />} sx={{ color: "white" }}>TEAMS</Button>
                </Grid>
                <Grid item>
                  <Button startIcon={<BuildIcon />} sx={{ color: "white" }}>PROJECTS</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>

        {/* AREA KONTEN UTAMA */}
        <VuiBox px={3} mb={4}>
          <Grid container spacing={3}>
            
            {/* 1. CARD KIRI: Platform Settings */}
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={panelStyle}>
                <VuiTypography variant="h6" color="white" fontWeight="bold" mb={2}>
                  Platform Settings
                </VuiTypography>
                <Stack spacing={2}>
                  <VuiTypography variant="caption" color="text" fontWeight="bold">ACCOUNT</VuiTypography>
                  <VuiBox display="flex" alignItems="center">
                    <Switch defaultChecked size="small" />
                    <VuiTypography variant="button" color="text" ml={1}>Email me when someone follows me</VuiTypography>
                  </VuiBox>
                  <VuiBox display="flex" alignItems="center">
                    <Switch size="small" />
                    <VuiTypography variant="button" color="text" ml={1}>Email me when someone answers on my post</VuiTypography>
                  </VuiBox>
                  
                  <VuiTypography variant="caption" color="text" fontWeight="bold" mt={2}>APPLICATION</VuiTypography>
                  <VuiBox display="flex" alignItems="center">
                    <Switch defaultChecked size="small" />
                    <VuiTypography variant="button" color="text" ml={1}>New launches and projects</VuiTypography>
                  </VuiBox>
                </Stack>
              </Card>
            </Grid>

            {/* 2. CARD TENGAH: Profile Information */}
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={panelStyle}>
                <VuiTypography variant="h6" color="white" fontWeight="bold" mb={2}>
                  Profile Information
                </VuiTypography>
                <VuiTypography variant="button" color="text" fontWeight="regular" display="block" mb={3}>
                  Hi, I’m Alec Thompson, decisions: If you can’t decide, the answer is no. If two paths are equally difficult, choose the one more painful in the short term.
                </VuiTypography>
                <Divider sx={{ background: "rgba(255, 255, 255, 0.1)", my: 2 }} />
                <VuiBox display="flex" flexDirection="column" gap={1.5}>
                  <VuiTypography variant="button" color="text">Full Name: <span style={{ color: "#fff", fontWeight: "bold" }}>Mark Johnson</span></VuiTypography>
                  <VuiTypography variant="button" color="text">Mobile: <span style={{ color: "#fff", fontWeight: "bold" }}>(44) 123 1234 123</span></VuiTypography>
                  <VuiTypography variant="button" color="text">Email: <span style={{ color: "#fff", fontWeight: "bold" }}>mark@simmmple.com</span></VuiTypography>
                  <VuiTypography variant="button" color="text">Location: <span style={{ color: "#fff", fontWeight: "bold" }}>United States</span></VuiTypography>
                  <VuiBox display="flex" alignItems="center" gap={1} mt={1}>
                    <VuiTypography variant="button" color="text" mr={1}>Social:</VuiTypography>
                    <FacebookIcon sx={{ color: "#0075ff", cursor: "pointer" }} />
                    <TwitterIcon sx={{ color: "#55acee", cursor: "pointer" }} />
                    <InstagramIcon sx={{ color: "#e1306c", cursor: "pointer" }} />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>

            {/* 3. CARD KANAN: Car Overview & Satisfaction Rate */}
            <Grid item xs={12} xl={4}>
              <Grid container spacing={3} flexDirection="column" height="100%">
                <Grid item xs={12}>
                  <Card sx={{ ...panelStyle, background: "linear-gradient(135deg, #0f1c5c 0%, #030720 100%)" }}>
                    <VuiTypography variant="h6" color="white" fontWeight="bold">Hello, Mark Johnson!</VuiTypography>
                    <VuiTypography variant="button" color="text" display="block" mb={2}>Your Car is ready.</VuiTypography>
                    <Grid container spacing={2} textAlign="center" mt={1}>
                      <Grid item xs={6}>
                        <VuiBox p={2} sx={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px" }}>
                          <VuiTypography variant="caption" color="text" display="block">Battery Health</VuiTypography>
                          <VuiTypography variant="h5" color="white" fontWeight="bold">76%</VuiTypography>
                        </VuiBox>
                      </Grid>
                      <Grid item xs={6}>
                        <VuiBox p={2} sx={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px" }}>
                          <VuiTypography variant="caption" color="text" display="block">Efficiency</VuiTypography>
                          <VuiTypography variant="h5" color="white" fontWeight="bold">+20%</VuiTypography>
                        </VuiBox>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </VuiBox>

        {/* ROW PROYEK (BAWAH) */}
        <VuiBox px={3} mb={4}>
          <Card sx={panelStyle}>
            <VuiBox mb={1}>
              <VuiTypography variant="h6" color="white" fontWeight="bold">Projects</VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">Architects design houses</VuiTypography>
            </VuiBox>
            <Grid container spacing={3} mt={1}>
              {/* Project Card 1 */}
              <Grid item xs={12} md={6} xl={4}>
                <VuiBox display="flex" flexDirection="column">
                  <VuiBox component="img" src={profile1} borderRadius="20px" width="100%" height="200px" sx={{ objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <VuiBox mt={2}>
                    <VuiTypography variant="caption" color="text" fontWeight="medium">Project #2</VuiTypography>
                    <VuiTypography variant="h5" color="white" fontWeight="bold" my={0.5}>Modern</VuiTypography>
                    <VuiTypography variant="button" color="text" display="block" mb={2}>As Uber works through a huge amount of internal management turmoil.</VuiTypography>
                    <Button variant="outlined" color="info" size="small" sx={{ borderRadius: "10px" }}>VIEW ALL</Button>
                  </VuiBox>
                </VuiBox>
              </Grid>

              {/* Project Card 2 */}
              <Grid item xs={12} md={6} xl={4}>
                <VuiBox display="flex" flexDirection="column">
                  <VuiBox component="img" src={profile2} borderRadius="20px" width="100%" height="200px" sx={{ objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <VuiBox mt={2}>
                    <VuiTypography variant="caption" color="text" fontWeight="medium">Project #1</VuiTypography>
                    <VuiTypography variant="h5" color="white" fontWeight="bold" my={0.5}>Scandinavian</VuiTypography>
                    <VuiTypography variant="button" color="text" display="block" mb={2}>Music is something that every person has his or her own specific opinion about.</VuiTypography>
                    <Button variant="outlined" color="info" size="small" sx={{ borderRadius: "10px" }}>VIEW ALL</Button>
                  </VuiBox>
                </VuiBox>
              </Grid>

              {/* Project Card 3 */}
              <Grid item xs={12} md={6} xl={4}>
                <VuiBox display="flex" flexDirection="column">
                  <VuiBox component="img" src={profile3} borderRadius="20px" width="100%" height="200px" sx={{ objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <VuiBox mt={2}>
                    <VuiTypography variant="caption" color="text" fontWeight="medium">Project #3</VuiTypography>
                    <VuiTypography variant="h5" color="white" fontWeight="bold" my={0.5}>Minimalist</VuiTypography>
                    <VuiTypography variant="button" color="text" display="block" mb={2}>Different people have different taste, and various types of music.</VuiTypography>
                    <Button variant="outlined" color="info" size="small" sx={{ borderRadius: "10px" }}>VIEW ALL</Button>
                  </VuiBox>
                </VuiBox>
              </Grid>
            </Grid>
          </Card>
        </VuiBox>
      </VuiBox>
    </>
  );
}

// Global Custom Container Style
const panelStyle = {
  p: 3,
  borderRadius: "20px",
  border: "1px solid rgba(145,160,255,0.16)",
  background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.69) 92.1%)",
  height: "100%",
};

export default Profile;