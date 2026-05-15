import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VuiBox from "components/VuiBox"; // Gunakan VuiBox agar seragam

export default function MiniStatisticsCard({ title = {}, count, percentage = {}, icon }) {
  return (
    <Card sx={{ 
      p: 2, 
      borderRadius: "14px", 
      background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.69) 92.1%)",
      border: "1px solid rgba(255, 255, 255, 0.1)"
    }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="caption" sx={{ textTransform: "uppercase", color: "rgba(255,255,255,0.6)", fontWeight: "bold" }}>
            {title.text}
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold", mr: 1 }}>{count}</Typography>
            {percentage?.text && (
              <Typography variant="caption" sx={{ color: percentage.color === 'success' ? '#01b574' : '#ee5d50', fontWeight: "bold" }}>
                {percentage.text}
              </Typography>
            )}
          </Box>
        </Box>
        
        {/* Kontainer Ikon dengan Gradasi Biru agar Tajam */}
        <VuiBox
          width="45px"
          height="45px"
          borderRadius="12px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ 
            background: "linear-gradient(135deg, #0075ff 0%, #2cd9ff 100%)",
            boxShadow: "0 4px 12px rgba(0, 117, 255, 0.3)" 
          }}
        >
          {icon.component}
        </VuiBox>
      </Box>
    </Card>
  );
}