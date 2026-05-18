import React from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// @mui material components
import CircularProgress from "@mui/material/CircularProgress";

function SatisfactionRate() {
  const cardStyle = {
    background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.69) 92.1%)",
    borderRadius: "20px",
    p: 3,
    height: "100%", // Memastikan tinggi card penuh mengikuti row grid
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };

  return (
    <Card sx={cardStyle}>
      <VuiBox>
        <VuiTypography variant="h6" color="white" fontWeight="bold" mb="4px">
          Satisfaction Rate
        </VuiTypography>
        <VuiTypography variant="button" color="text" fontWeight="regular">
          From all projects
        </VuiTypography>
      </VuiBox>

      {/* Area Progress Lingkaran & Emoji */}
      <VuiBox 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center"
        position="relative"
        my={2}
      >
        {/* Lingkaran Progress Terluar (Track Abu-abu) */}
        <CircularProgress
          variant="determinate"
          value={100}
          size={160}
          thickness={4}
          sx={{ color: "rgba(255, 255, 255, 0.05)" }}
        />
        
        {/* Lingkaran Progress Utama (Warna Biru Neon Aktif) */}
        <CircularProgress
          variant="determinate"
          value={95}
          size={160}
          thickness={4}
          sx={{
            color: "#0075ff",
            position: "absolute",
            left: 0,
            right: 0,
            margin: "auto",
            "& .MuiCircularProgress-circle": {
              strokeLinecap: "round",
            },
          }}
        />

        {/* Konten Kontainer di Dalam Lingkaran */}
        <VuiBox
          position="absolute"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* Box Lingkaran Kecil untuk Icon Emoji */}
          <VuiBox
            width="44px"
            height="44px"
            borderRadius="50%"
            backgroundColor="#0075ff"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb="4px"
            boxShadow="0px 4px 12px rgba(0, 117, 255, 0.4)"
          >
            <Icon sx={{ color: "#fff", fontSize: "22px !important" }}>sentiment_satisfied_alt</Icon>
          </VuiBox>
          
          <VuiTypography variant="h4" color="white" fontWeight="bold">
            95%
          </VuiTypography>
        </VuiBox>
      </VuiBox>

      {/* Footer Info di dalam Card */}
      <VuiBox 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center"
        p="12px"
        sx={{ 
          background: "rgba(255, 255, 255, 0.03)", 
          borderRadius: "14px",
          border: "1px solid rgba(255, 255, 255, 0.05)"
        }}
      >
        <VuiTypography variant="caption" color="text" fontWeight="medium">0%</VuiTypography>
        <VuiTypography variant="button" color="white" fontWeight="bold">Based on likes</VuiTypography>
        <VuiTypography variant="caption" color="text" fontWeight="medium">100%</VuiTypography>
      </VuiBox>
    </Card>
  );
}

export default SatisfactionRate;