import { Card, CircularProgress, Grid, Icon } from "@mui/material";
import VuiBox from "../../../../components/VuiBox";
import VuiTypography from "../../../../components/VuiTypography";

function ReferralTracking() {
  return (
    <Card
      sx={{
        backgroundImage:
          "linear-gradient(145deg, rgba(6, 11, 40, 0.96) 12%, rgba(10, 14, 35, 0.7) 92%)",
        border: "1px solid rgba(145, 160, 255, 0.16)",
        borderRadius: "18px",
        p: 3,
        height: "100%",
      }}
    >
      <VuiBox display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <VuiTypography variant="h6" color="white" fontWeight="bold">
          Referral Tracking
        </VuiTypography>
        <Icon sx={{ color: "rgba(255,255,255,0.7)" }}>more_horiz</Icon>
      </VuiBox>

      <Grid container spacing={2.5}>
        <Grid xs={12} md={6} display="flex" flexDirection="column" justifyContent="space-between" gap={2}>
          <VuiBox sx={metricCard}>
            <VuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
              Invited
            </VuiTypography>
            <VuiTypography variant="h4" color="white" fontWeight="bold" mt={1}>
              145
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
              people invited
            </VuiTypography>
          </VuiBox>

          <VuiBox sx={metricCard}>
            <VuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
              Bonus
            </VuiTypography>
            <VuiTypography variant="h4" color="white" fontWeight="bold" mt={1}>
              1,465
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
              total bonus
            </VuiTypography>
          </VuiBox>
        </Grid>

        <Grid xs={12} md={6} display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
          <VuiBox position="relative" display="inline-flex" justifyContent="center" alignItems="center" mb={2}>
            <CircularProgress
              variant="determinate"
              value={70}
              sx={{
                color: "rgba(255,255,255,0.08)",
                position: "absolute",
                left: 0,
              }}
              size={120}
              thickness={4}
            />
            <CircularProgress
              variant="determinate"
              value={70}
              sx={{
                "& .MuiCircularProgress-circle": {
                  stroke: "url(#gradient2)",
                },
              }}
              size={120}
              thickness={4}
            />
            <svg width="0" height="0">
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0075FF" />
                  <stop offset="100%" stopColor="#2CD9FF" />
                </linearGradient>
              </defs>
            </svg>
            <VuiBox position="absolute" textAlign="center">
              <VuiTypography variant="h5" color="white" fontWeight="bold">
                70%
              </VuiTypography>
              <VuiTypography variant="caption" color="text">
                Safety score
              </VuiTypography>
            </VuiBox>
          </VuiBox>

          <VuiTypography variant="h5" color="white" fontWeight="bold">
            9.3
          </VuiTypography>
          <VuiTypography variant="caption" color="text" mt={0.5}>
            Total score
          </VuiTypography>
        </Grid>
      </Grid>
    </Card>
  );
}

const metricCard = {
  p: 2,
  borderRadius: "14px",
  border: "1px solid rgba(145, 160, 255, 0.14)",
  backgroundColor: "rgba(255,255,255,0.03)",
};

export default ReferralTracking;
