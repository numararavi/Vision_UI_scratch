import { Card, CircularProgress } from "@mui/material";
import { IoHappy } from "react-icons/io5";
import VuiBox from "../../../../components/VuiBox";
import VuiTypography from "../../../../components/VuiTypography";

function SatisfactionRate() {
  return (
    <Card
      sx={{
        backgroundImage:
          "linear-gradient(145deg, rgba(6, 11, 40, 0.96) 12%, rgba(10, 14, 35, 0.7) 92%)",
        border: "1px solid rgba(145, 160, 255, 0.16)",
        borderRadius: "18px",
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <VuiBox>
        <VuiTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase" sx={{ letterSpacing: "0.16em" }}>
          Satisfaction Rate
        </VuiTypography>
        <VuiTypography variant="h4" color="white" fontWeight="bold" mt={1}>
          95%
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          Based on likes
        </VuiTypography>
      </VuiBox>

      <VuiBox position="relative" display="inline-flex" justifyContent="center" alignItems="center" my={2}>
        <CircularProgress
          variant="determinate"
          value={60}
          sx={{
            color: "rgba(255,255,255,0.08)",
            position: "absolute",
            left: 0,
          }}
          size={130}
          thickness={4}
        />
        <CircularProgress
          variant="determinate"
          value={60}
          sx={{
            "& .MuiCircularProgress-circle": {
              stroke: "url(#gradient1)",
            },
          }}
          size={130}
          thickness={4}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0075FF" />
              <stop offset="100%" stopColor="#2CD9FF" />
            </linearGradient>
          </defs>
        </svg>
        <VuiBox position="absolute" display="flex" flexDirection="column" alignItems="center">
          <IoHappy style={{ fontSize: 34, color: "white" }} />
          <VuiTypography variant="caption" color="text" mt={0.5}>
            0% - 100%
          </VuiTypography>
        </VuiBox>
      </VuiBox>

      <VuiBox display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="caption" color="text">
          0%
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          From all projects
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          100%
        </VuiTypography>
      </VuiBox>
    </Card>
  );
}

export default SatisfactionRate;
