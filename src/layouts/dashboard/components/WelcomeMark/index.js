import { Card, Icon } from "@mui/material";
import VuiBox from "../../../../components/VuiBox";
import VuiTypography from "../../../../components/VuiTypography";
import VuiButton from "../../../../components/VuiButton";

function WelcomeMark() {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(44, 217, 255, 0.25), transparent 55%), linear-gradient(127.09deg, rgba(6, 11, 40, 0.95) 3.29%, rgba(10, 14, 35, 0.75) 92.1%)",
        border: "1px solid rgba(145, 160, 255, 0.16)",
        borderRadius: "18px",
        p: 3,
        minHeight: 340,
        transition: "transform 220ms cubic-bezier(.2,.8,.2,1), box-shadow 220ms cubic-bezier(.2,.8,.2,1)",
        '&:hover': {
          transform: "translateY(-6px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <VuiBox>
        <VuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase" sx={{ letterSpacing: "0.2em" }}>
          Welcome back
        </VuiTypography>
        <VuiTypography variant="h4" color="white" fontWeight="bold" mt={1.5} mb={1}>
          Mark Johnson
        </VuiTypography>
        <VuiTypography variant="body2" color="text" sx={{ maxWidth: 260 }}>
          Glad to see you again! Ask me anything about your next launch.
        </VuiTypography>
      </VuiBox>

      <VuiBox display="flex" alignItems="center" justifyContent="space-between" mt={3}>
        <VuiButton variant="outlined" color="white" startIcon={<Icon>keyboard_voice</Icon>}>
          Tap to record
        </VuiButton>
        <VuiBox display="flex" alignItems="center" gap={1} sx={{ color: "rgba(255,255,255,0.7)" }}>
          <Icon sx={{ fontSize: 18 }}>play_circle</Icon>
          <VuiTypography variant="caption" color="text">
            Quick tips
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default WelcomeMark;
