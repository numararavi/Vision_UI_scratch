import { Card, Grid, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Chart from "react-apexcharts";

function CarInformations() {
  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
          Car Informations
        </VuiTypography>
        <VuiTypography variant="button" color="text" fontWeight="regular" mb="20px">
          Hello, Mark Johnson! Your Car is ready.
        </VuiTypography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <VuiBox display="flex" flexDirection="column" alignItems="center">
              {/* Grafik Lingkaran 68% */}
              <Chart 
                options={{
                  chart: { sparkline: { enabled: true } },
                  plotOptions: { radialBar: { hollow: { size: "60%" }, track: { background: "#1a1f37" }, dataLabels: { show: false } } },
                  colors: ["#0075ff"]
                }}
                series={[68]}
                type="radialBar"
                width={150}
              />
              <VuiTypography variant="h4" color="white" fontWeight="bold">68%</VuiTypography>
              <VuiTypography variant="caption" color="text">Current load</VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <VuiBox bgColor="info" p={2} borderRadius="lg" sx={{ background: "#1a1f37" }}>
                  <VuiTypography variant="caption" color="text">Battery Health</VuiTypography>
                  <VuiTypography variant="h6" color="white">76%</VuiTypography>
                </VuiBox>
              </Grid>
              <Grid item xs={6}>
                <VuiBox bgColor="info" p={2} borderRadius="lg" sx={{ background: "#1a1f37" }}>
                  <VuiTypography variant="caption" color="text">Efficiency</VuiTypography>
                  <VuiTypography variant="h6" color="white">+20%</VuiTypography>
                </VuiBox>
              </Grid>
              {/* Tambahkan 2 lagi di bawahnya sesuai foto */}
            </Grid>
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
}
export default CarInformations;