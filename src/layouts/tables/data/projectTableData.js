/* eslint-disable react/prop-types */
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';

// IMPORT LOGO UTK PROJECT (Gunakan SVG Icons resmi MUI)
import LanguageIcon from '@mui/icons-material/Language';       // Untuk Web/Platform
import ShieldIcon from '@mui/icons-material/Shield';           // Untuk Security/PERISAI
import FaceIcon from '@mui/icons-material/Face';               // Untuk Biometric/Face Attendance
import DashboardIcon from '@mui/icons-material/Dashboard';     // Untuk Dashboard Analytics
import CodeIcon from '@mui/icons-material/Code';               // Untuk Chakra/Software

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Komponen Pembungkus Logo & Teks agar sejajar rapi
function ProjectName({ icon, name }) {
  return (
    <VuiBox display="flex" alignItems="center" py={0.5}>
      {/* Kotak Mini untuk Background Logo */}
      <VuiBox
        width="32px"
        height="32px"
        borderRadius="8px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr={2}
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {icon}
      </VuiBox>
      <VuiTypography variant="button" color="white" fontWeight="medium">
        {name}
      </VuiTypography>
    </VuiBox>
  );
}

const projectTableData = {
  columns: [
    { name: "companies", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "left" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      companies: <ProjectName icon={<CodeIcon sx={{ color: "#2cd9ff", fontSize: "18px" }} />} name="Chakra Soft UI Version" />,
      budget: <VuiTypography variant="button" color="white" fontWeight="medium">$14,000</VuiTypography>,
      status: <VuiTypography variant="button" color="white" fontWeight="medium">Working</VuiTypography>,
      completion: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography variant="button" color="white" fontWeight="medium" sx={{ mr: 1 }}>60%</VuiTypography>
          <VuiBox width="8rem">
            <VuiProgress value={60} color="info" sx={{ background: "#2d3748 !important", height: "6px !important" }} />
          </VuiBox>
        </VuiBox>
      ),
      action: (
        <IconButton size="small" sx={{ color: "#718096" }}><MoreVertIcon fontSize="small" /></IconButton>
      ),
    },
    {
      companies: <ProjectName icon={<LanguageIcon sx={{ color: "#0075ff", fontSize: "18px" }} />} name="Add Progress Track" />,
      budget: <VuiTypography variant="button" color="white" fontWeight="medium">$3,000</VuiTypography>,
      status: <VuiTypography variant="button" color="white" fontWeight="medium">Done</VuiTypography>,
      completion: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography variant="button" color="white" fontWeight="medium" sx={{ mr: 1 }}>100%</VuiTypography>
          <VuiBox width="8rem">
            <VuiProgress value={100} color="success" sx={{ background: "#2d3748 !important", height: "6px !important" }} />
          </VuiBox>
        </VuiBox>
      ),
      action: (
        <IconButton size="small" sx={{ color: "#718096" }}><MoreVertIcon fontSize="small" /></IconButton>
      ),
    },
    {
      companies: <ProjectName icon={<ShieldIcon sx={{ color: "#ee5d50", fontSize: "18px" }} />} name="Fix Platform Errors (PERISAI Mobile)" />,
      budget: <VuiTypography variant="button" color="white" fontWeight="medium">Not Set</VuiTypography>,
      status: <VuiTypography variant="button" color="white" fontWeight="medium">Canceled</VuiTypography>,
      completion: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography variant="button" color="white" fontWeight="medium" sx={{ mr: 1 }}>30%</VuiTypography>
          <VuiBox width="8rem">
            <VuiProgress value={30} color="error" sx={{ background: "#2d3748 !important", height: "6px !important" }} />
          </VuiBox>
        </VuiBox>
      ),
      action: (
        <IconButton size="small" sx={{ color: "#718096" }}><MoreVertIcon fontSize="small" /></IconButton>
      ),
    },
    {
      companies: <ProjectName icon={<FaceIcon sx={{ color: "#01b574", fontSize: "18px" }} />} name="Launch Web Face Attendance System" />,
      budget: <VuiTypography variant="button" color="white" fontWeight="medium">$20,500</VuiTypography>,
      status: <VuiTypography variant="button" color="white" fontWeight="medium">Working</VuiTypography>,
      completion: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography variant="button" color="white" fontWeight="medium" sx={{ mr: 1 }}>80%</VuiTypography>
          <VuiBox width="8rem">
            <VuiProgress value={80} color="info" sx={{ background: "#2d3748 !important", height: "6px !important" }} />
          </VuiBox>
        </VuiBox>
      ),
      action: (
        <IconButton size="small" sx={{ color: "#718096" }}><MoreVertIcon fontSize="small" /></IconButton>
      ),
    },
    {
      companies: <ProjectName icon={<DashboardIcon sx={{ color: "#fff", fontSize: "18px" }} />} name="Redesign Online Learning Analytics Dashboard" />,
      budget: <VuiTypography variant="button" color="white" fontWeight="medium">$4,000</VuiTypography>,
      status: <VuiTypography variant="button" color="white" fontWeight="medium">Working</VuiTypography>,
      completion: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography variant="button" color="white" fontWeight="medium" sx={{ mr: 1 }}>10%</VuiTypography>
          <VuiBox width="8rem">
            <VuiProgress value={10} color="warning" sx={{ background: "#2d3748 !important", height: "6px !important" }} />
          </VuiBox>
        </VuiBox>
      ),
      action: (
        <IconButton size="small" sx={{ color: "#718096" }}><MoreVertIcon fontSize="small" /></IconButton>
      ),
    }
  ],
};

export default projectTableData;