import React from "react";
import Box from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

export default function Footer() {
  return (
    <Box sx={{ py: 6, textAlign: "center", color: "rgba(255,255,255,0.7)" }}>
      <VuiTypography variant="body2">© {new Date().getFullYear()} Vision UI</VuiTypography>
    </Box>
  );
}
