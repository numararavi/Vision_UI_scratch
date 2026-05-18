import React from "react";
import Card from "@mui/material/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Import asset gambar roket/welcome bawaan template kamu jika ada
import welcomeCardBg from "assets/images/cardimgfree.png"; 

function WelcomeMark() {
  return (
    <Card
      sx={{
        height: "100%", // Memaksa card mengikuti tinggi row Grid stretch
        minHeight: "340px", // Biar presisi sama dengan SatisfactionRate
        backgroundImage: `url(${welcomeCardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        p: 3,
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* BAGIAN ATAS: Teks Pengantar */}
      <VuiBox display="flex" flexDirection="column" sx={{ zIndex: 2, maxWidth: "65%" }}>
        <VuiTypography variant="button" color="text" fontWeight="bold" mb="4px" sx={{ opacity: 0.7 }}>
          Welcome back,
        </VuiTypography>
        <VuiTypography variant="h3" color="white" fontWeight="bold" mb="12px" sx={{ lineHeight: 1.2 }}>
          Glad to see you again!
        </VuiTypography>
        <VuiTypography variant="button" color="text" fontWeight="regular" fontSize="14px" sx={{ lineHeight: 1.5 }}>
          An adaptive learning analytics dashboard designed for UNTIDAR. Track system parameters, face biometric matching logs, and performance structures smoothly.
        </VuiTypography>
      </VuiBox>

      {/* BAGIAN BAWAH: Tombol Aksi / Tap to Record */}
      <VuiBox sx={{ zIndex: 2, mt: "auto" }}>
        <VuiTypography
          component="a"
          href="#"
          variant="button"
          color="white"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          sx={{
            cursor: "pointer",
            width: "fit-content",
            transition: "transform 0.2s ease",
            "&:hover": {
              transform: "translateX(4px)", // Efek geser dikit pas di-hover
            },
            "& .MuiSvgIcon-root": {
              fontSize: "16px",
              marginLeft: "6px",
              transition: "transform 0.2s ease",
            },
          }}
        >
          Tap to record
          <ArrowForwardIcon />
        </VuiTypography>
      </VuiBox>

      {/* OVERLAY GLASS EFFECT (Biar Teks Sisi Kiri Tetap Kontras & Tajam) */}
      <VuiBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        sx={{
          background: "linear-gradient(90deg, rgba(6, 11, 40, 0.9) 0%, rgba(6, 11, 40, 0.4) 60%, transparent 100%)",
          zIndex: 1,
        }}
      />
    </Card>
  );
}

export default WelcomeMark;