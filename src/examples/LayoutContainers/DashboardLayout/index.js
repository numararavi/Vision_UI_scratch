import React from "react";
import Box from "@mui/material/Box";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "transparent" }}>
      {children}
    </Box>
  );
}
