import { Card, Grid, Stack, Chip, Icon } from "@mui/material";
import Chart from "react-apexcharts";
import VuiBox from "../../components/VuiBox";
import VuiTypography from "../../components/VuiTypography";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import WelcomeMark from "./components/WelcomeMark";
import OrderOverview from "./components/OrderOverview";
import Projects from "./components/Projects";
import SatisfactionRate from "./components/SatisfactionRate";
import ReferralTracking from "./components/RefferalTracking";
import lineChartDataDashboard from "./data/lineChartData";
import lineChartOptionsDashboard from "./data/lineChartOption";
import barChartDataDashboard from "./data/barChartData";
import barChartOptionsDashboard from "./data/barChartOption";

const dashboardBackground =
  "radial-gradient(circle at 8% 2%, rgba(56, 122, 255, 0.26), transparent 32%), radial-gradient(circle at 92% 8%, rgba(44, 217, 255, 0.16), transparent 26%), linear-gradient(180deg, #060b28 0%, #0a0f2c 100%)";

const statCards = [
  { label: "Today's Money", value: "$53,000", delta: "+55%", positive: true, icon: "payments" },
  { label: "Today's Users", value: "2,300", delta: "+5%", positive: true, icon: "group" },
  { label: "New Clients", value: "+3,052", delta: "-14%", positive: false, icon: "person_add" },
  { label: "Total Sales", value: "$173,000", delta: "+8%", positive: true, icon: "bar_chart" },
];

function Dashboard() {
  return (
    <>
      <DashboardNavbar />
      <VuiBox sx={{ background: dashboardBackground, minHeight: "100vh", pt: 11, pb: 4 }}>
        <Stack spacing={3} sx={{ maxWidth: 1440, mx: "auto", px: { xs: 2, md: 3 } }}>
          <VuiBox>
            <VuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase" sx={{ letterSpacing: "0.14em" }}>
              Pages / Dashboard
            </VuiTypography>
            <VuiTypography variant="h3" color="white" fontWeight="bold" mt={0.65}>
              Dashboard
            </VuiTypography>
          </VuiBox>

          <Grid container spacing={2.25}>
            {statCards.map((card) => (
              <Grid key={card.label} xs={12} sm={6} lg={3}>
                <Card sx={statCardShell}>
                  <VuiBox display="flex" alignItems="center" justifyContent="space-between" mb={1.6}>
                    <Chip
                      label={card.label}
                      size="small"
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        backgroundColor: "rgba(255,255,255,0.04)",
                      }}
                    />
                    <VuiBox
                      width={34}
                      height={34}
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <Icon sx={{ color: "white", fontSize: 18 }}>{card.icon}</Icon>
                    </VuiBox>
                  </VuiBox>

                  <VuiTypography variant="h5" color="white" fontWeight="bold">
                    {card.value}
                  </VuiTypography>
                  <VuiTypography
                    variant="caption"
                    sx={{ color: card.positive ? "#01b574" : "#ee5d50", fontWeight: 700, letterSpacing: "0.04em" }}
                  >
                    {card.delta}
                  </VuiTypography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2.25}>
            <Grid xs={12} lg={5}>
              <WelcomeMark />
            </Grid>
            <Grid xs={12} md={6} lg={3}>
              <SatisfactionRate />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <ReferralTracking />
            </Grid>
          </Grid>

          <Grid container spacing={2.25}>
            <Grid xs={12} xl={7}>
              <Card sx={panelCard}>
                <VuiBox mb={2}>
                  <VuiTypography variant="h6" color="white" fontWeight="bold">
                    Sales Overview
                  </VuiTypography>
                  <VuiTypography variant="caption" color="text">
                    Monthly performance across products
                  </VuiTypography>
                </VuiBox>
                <Chart type="area" series={lineChartDataDashboard} options={lineChartOptionsDashboard} height={340} />
              </Card>
            </Grid>

            <Grid xs={12} xl={5}>
              <Card sx={panelCard}>
                <VuiBox mb={2}>
                  <VuiTypography variant="h6" color="white" fontWeight="bold">
                    Active Users
                  </VuiTypography>
                  <VuiTypography variant="caption" color="text">
                    Insights from the latest cycle
                  </VuiTypography>
                </VuiBox>

                <Chart type="bar" series={barChartDataDashboard} options={barChartOptionsDashboard} height={320} />

                <Grid container spacing={1.5} mt={1.25}>
                  <Grid xs={6}>
                    <StatMeta label="Users" value="32,984" />
                  </Grid>
                  <Grid xs={6}>
                    <StatMeta label="Clicks" value="2.42M" />
                  </Grid>
                  <Grid xs={6}>
                    <StatMeta label="Sales" value="$2,400" />
                  </Grid>
                  <Grid xs={6}>
                    <StatMeta label="Items" value="320" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={2.25}>
            <Grid xs={12} xl={8}>
              <Projects />
            </Grid>
            <Grid xs={12} xl={4}>
              <OrderOverview />
            </Grid>
          </Grid>
        </Stack>
      </VuiBox>
    </>
  );
}

function StatMeta({ label, value }) {
  return (
    <VuiBox
      sx={{
        p: 1.25,
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
    >
      <VuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
        {label}
      </VuiTypography>
      <VuiTypography variant="h6" color="white" fontWeight="bold" mt={0.4}>
        {value}
      </VuiTypography>
    </VuiBox>
  );
}

const statCardShell = {
  p: 2.5,
  borderRadius: "14px",
  border: "1px solid rgba(145, 160, 255, 0.2)",
  background: "linear-gradient(150deg, rgba(14, 23, 62, 0.96), rgba(7, 14, 38, 0.92))",
  boxShadow: "0 16px 38px rgba(0, 0, 0, 0.35)",
  transition: "transform 220ms cubic-bezier(.2,.8,.2,1), box-shadow 220ms cubic-bezier(.2,.8,.2,1)",
  '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 30px 60px rgba(0,0,0,0.45)' },
};

const panelCard = {
  p: 2.5,
  borderRadius: "16px",
  border: "1px solid rgba(145,160,255,0.16)",
  backgroundImage: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.69) 92.1%)",
};

export default Dashboard;


