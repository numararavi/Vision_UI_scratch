import React from "react";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox"; 
import VuiTypography from "components/VuiTypography"; 
import DashboardNavbar from "examples/Navbars/DashboardNavbar"; 

// Vision UI Dashboard React example components
import Table from "examples/Tables"; 

// Data Imports (Menggunakan data terpisah)
import authorsTableData from "./data/authorsTableData"; 
import projectTableData from "./data/projectTableData"; 

function Tables() {
  const { columns: authColumns, rows: authRows } = authorsTableData;
  const { columns: prjColumns, rows: prjRows } = projectTableData;

  const tableCardStyle = {
    background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.69) 92.1%)",
    borderRadius: "20px",
    p: 3,
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  return (
    <>
      <DashboardNavbar />
      <VuiBox py={3} px={3} mt={8} sx={{ background: "#060b28", minHeight: "100vh" }}>
        {/* TABEL AUTHORS (ATAS) */}
        <VuiBox mb={3}>
          <Card sx={tableCardStyle}>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
              <VuiTypography variant="h6" color="white" fontWeight="bold">
                Authors Table
              </VuiTypography>
            </VuiBox>
            <VuiBox sx={{
              "& th": { borderBottom: "1px solid rgba(255, 255, 255, 0.05) !important", color: "#718096 !important" },
              "& td": { borderBottom: "1px solid rgba(255, 255, 255, 0.05) !important" }
            }}>
              <Table columns={authColumns} rows={authRows} />
            </VuiBox>
          </Card>
        </VuiBox>

        {/* TABEL PROJECTS (BAWAH) */}
        <Card sx={tableCardStyle}>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
            <VuiTypography variant="h6" color="white" fontWeight="bold">
              Projects Table
            </VuiTypography>
          </VuiBox>
          <VuiBox sx={{
            "& th": { borderBottom: "1px solid rgba(255, 255, 255, 0.05) !important", color: "#718096 !important" },
            "& td": { borderBottom: "1px solid rgba(255, 255, 255, 0.05) !important" }
          }}>
            <Table columns={prjColumns} rows={prjRows} />
          </VuiBox>
        </Card>
      </VuiBox>
    </>
  );
}

export default Tables;