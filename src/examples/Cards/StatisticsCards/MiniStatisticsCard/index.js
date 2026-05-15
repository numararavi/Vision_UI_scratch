import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MiniStatisticsCard({ title = {}, count, percentage = {}, icon }) {
  return (
    <Card sx={{ p: 2, borderRadius: 2, bgcolor: "rgba(255,255,255,0.03)" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="caption" sx={{ textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
            {title.text}
          </Typography>
          <Typography variant="h5" sx={{ color: "#fff" }}>{count}</Typography>
          {percentage?.text && (
            <Typography variant="caption" sx={{ color: percentage.color === 'success' ? '#4ade80' : '#ff6b88' }}>
              {percentage.text}
            </Typography>
          )}
        </Box>
        <Box>
          {icon?.component}
        </Box>
      </Box>
    </Card>
  );
}
