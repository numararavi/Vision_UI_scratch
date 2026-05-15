// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// Ganti baris import yang error menjadi:
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CarInformations from "./components/CarInformations";
import PlatformSettings from "./components/PlatformSettings";
import ProfileInfoCard from "./components/ProfileInfoCard";
import ProjectCard from "./components/ProjectCard.js";

// Images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Profile() {
  return (
    <DashboardLayout>
      <Header />
      
      {/* Baris Pertama: Welcome & Car Info */}
      <VuiBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={4}>
            <Welcome />
          </Grid>
          <Grid item xs={12} xl={5}>
            <CarInformations />
          </Grid>
          <Grid item xs={12} xl={3}>
            {/* Kartu Statistik Kecil (Sesuai Referensi) */}
            <VuiBox
              display="flex"
              flexDirection="column"
              justifyContent="center"
              p={3}
              sx={{
                background: "linear-gradient(126.97deg, #060b28 28.26%, #0a0e23 91.71%)",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                Satisfaction Rate
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular" mb="20px">
                From all projects
              </VuiTypography>
              <VuiBox sx={{ alignSelf: "center", mt: "auto" }}>
                <VuiTypography variant="h2" color="white" fontWeight="bold">
                  95%
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>

      {/* Baris Kedua: Settings & Profile Info */}
      <VuiBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid>
          <Grid item xs={12} md={6} xl={8}>
            <ProfileInfoCard />
          </Grid>
        </Grid>
      </VuiBox>

      {/* Baris Ketiga: Projects Grid */}
      <VuiBox mb={3}>
        <Card sx={{ background: "transparent", boxShadow: "none" }}>
          <VuiBox px={2} mb={3}>
            <VuiTypography variant="lg" color="white" fontWeight="bold">
              Projects
            </VuiTypography>
            <VuiTypography variant="button" color="text" fontWeight="regular">
              Architects design houses
            </VuiTypography>
          </VuiBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <ProjectCard
                image={profile1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{ type: "internal", route: "/profile", label: "VIEW ALL" }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <ProjectCard
                image={profile2}
                label="project #1"
                title="scandinavian"
                description="Music is something that every person has his or her own specific opinion about."
                action={{ type: "internal", route: "/profile", label: "VIEW ALL" }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <ProjectCard
                image={profile3}
                label="project #3"
                title="minimalist"
                description="Different people have different taste, and various types of music."
                action={{ type: "internal", route: "/profile", label: "VIEW ALL" }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
          </Grid>
        </Card>
      </VuiBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Profile;