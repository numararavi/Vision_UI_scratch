import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

// Vision UI Components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data Imports
import invoicesData from "./data/invoicesData";
import billingInfoData from "./data/billingInfoData";
import transactionsData from "./data/transactionsData";

function Billing() {
  const cardStyle = {
    background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.69) 92.1%)",
    borderRadius: "20px",
    p: 3,
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  return (
    <>
      <DashboardNavbar />
      <VuiBox py={3} px={3} mt={8} sx={{ background: "#060b28", minHeight: "100vh" }}>
        <Grid container spacing={3}>
          
          {/* BARIS ATAS SISI KIRI: Master Card & Credit Balance */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              {/* Virtual Credit Card */}
              <Grid item xs={12} md={6}>
                <Card sx={{
                  backgroundImage: "linear-gradient(135deg, #0f1c5c 0%, #030720 100%)",
                  borderRadius: "20px",
                  p: 3,
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}>
                  <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={5}>
                    <VuiTypography variant="h6" color="white" fontWeight="bold">Vision UI</VuiTypography>
                    <VuiBox component="span" sx={{ fontSize: "24px", color: "white", fontWeight: "bold" }}>VISA</VuiBox>
                  </VuiBox>
                  <VuiTypography variant="h4" color="white" fontWeight="medium" mb={4} sx={{ letterSpacing: "2px" }}>
                    7812 2139 0823 XXXX
                  </VuiTypography>
                  <Grid container>
                    <Grid item xs={6}>
                      <VuiTypography variant="caption" color="text" display="block">VALID THRU</VuiTypography>
                      <VuiTypography variant="button" color="white" fontWeight="medium">05/24</VuiTypography>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                      <VuiTypography variant="caption" color="text" display="block">CVV</VuiTypography>
                      <VuiTypography variant="button" color="white" fontWeight="medium">09X</VuiTypography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>

              {/* Credit Balance Card */}
              <Grid item xs={12} md={6}>
                <Card sx={cardStyle}>
                  <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <VuiTypography variant="button" color="text" fontWeight="medium">Credit Balance</VuiTypography>
                    <IconButton size="small" sx={{ color: "white" }}><Icon>more_vert</Icon></IconButton>
                  </VuiBox>
                  <VuiTypography variant="h2" color="white" fontWeight="bold" mb={3}>$25,215</VuiTypography>
                  <VuiBox display="flex" alignItems="center" sx={{ background: "rgba(255,255,255,0.05)", p: 1.5, borderRadius: "12px" }}>
                    <AccountBalanceWalletIcon sx={{ color: "#0075ff", mr: 2 }} />
                    <VuiBox>
                      <VuiTypography variant="button" color="white" fontWeight="bold" display="block">Bill & Taxes</VuiTypography>
                      <VuiTypography variant="caption" color="text">Today, 16:36</VuiTypography>
                    </VuiBox>
                    <VuiTypography variant="button" color="white" fontWeight="bold" sx={{ ml: "auto" }}>-$154.50</VuiTypography>
                  </VuiBox>
                </Card>
              </Grid>

              {/* Payment Method */}
              <Grid item xs={12}>
                <Card sx={cardStyle}>
                  <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                    <VuiTypography variant="h6" color="white" fontWeight="bold">Payment Method</VuiTypography>
                    <Button variant="contained" color="primary" size="small" sx={{ borderRadius: "12px", fontSize: "10px" }}>ADD A NEW CARD</Button>
                  </VuiBox>
                  <Grid container spacing={2}>
                    {["7812 2139 0823 XXXX", "7812 2139 0823 XXXX"].map((cardNum, index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <VuiBox display="flex" alignItems="center" p={2} sx={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", background: "#0f1535" }}>
                          <VuiTypography variant="button" color="white" fontWeight="medium">{index === 0 ? "Mastercard" : "Visa"}</VuiTypography>
                          <VuiTypography variant="button" color="white" sx={{ ml: 2 }}>{cardNum}</VuiTypography>
                          <IconButton size="small" sx={{ color: "white", ml: "auto" }}><EditIcon sx={{ fontSize: "16px" }} /></IconButton>
                        </VuiBox>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* BARIS ATAS SISI KANAN: Invoices */}
          <Grid item xs={12} lg={4}>
            <Card sx={{ ...cardStyle, height: "100%" }}>
              <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <VuiTypography variant="h6" color="white" fontWeight="bold">Invoices</VuiTypography>
                <Button variant="outlined" sx={{ color: "#0075ff", borderColor: "#0075ff", borderRadius: "10px", fontSize: "10px" }}>VIEW ALL</Button>
              </VuiBox>
              <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }}>
                {invoicesData.map((inv, i) => (
                  <VuiBox component="li" display="flex" justifyContent="space-between" alignItems="center" py={1.5} key={i}>
                    <VuiBox>
                      <VuiTypography variant="button" color="white" fontWeight="bold" display="block">{inv.date}</VuiTypography>
                      <VuiTypography variant="caption" color="text">{inv.id}</VuiTypography>
                    </VuiBox>
                    <VuiBox display="flex" alignItems="center">
                      <VuiTypography variant="button" color="white" fontWeight="medium" mr={2}>{inv.price}</VuiTypography>
                      <IconButton size="small" sx={{ color: "white" }}><PictureAsPdfIcon sx={{ fontSize: "18px" }} /><VuiTypography variant="caption" color="white" ml={0.5}>PDF</VuiTypography></IconButton>
                    </VuiBox>
                  </VuiBox>
                ))}
              </VuiBox>
            </Card>
          </Grid>

          {/* BARIS BAWAH SISI KIRI: Billing Information */}
          <Grid item xs={12} lg={7}>
            <Card sx={cardStyle}>
              <VuiTypography variant="h6" color="white" fontWeight="bold" mb={3}>Billing Information</VuiTypography>
              <VuiBox display="flex" flexDirection="column" gap={2}>
                {billingInfoData.map((info, idx) => (
                  <VuiBox key={idx} p={2} sx={{ background: "#0f1535", borderRadius: "14px" }}>
                    <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                      <VuiTypography variant="button" color="white" fontWeight="bold">{info.name}</VuiTypography>
                      <VuiBox>
                        <Button startIcon={<DeleteIcon />} color="error" size="small" sx={{ fontSize: "11px", mr: 1 }}>DELETE</Button>
                        <Button startIcon={<EditIcon />} sx={{ color: "white", fontSize: "11px" }}>EDIT</Button>
                      </VuiBox>
                    </VuiBox>
                    <VuiTypography variant="caption" color="text" display="block">Company Name: <span style={{ color: "#fff" }}>{info.company}</span></VuiTypography>
                    <VuiTypography variant="caption" color="text" display="block">Email Address: <span style={{ color: "#fff" }}>{info.email}</span></VuiTypography>
                    <VuiTypography variant="caption" color="text" display="block">VAT Number: <span style={{ color: "#fff" }}>{info.vat}</span></VuiTypography>
                  </VuiBox>
                ))}
              </VuiBox>
            </Card>
          </Grid>

          {/* BARIS BAWAH SISI KANAN: Your Transactions */}
          <Grid item xs={12} lg={5}>
            <Card sx={cardStyle}>
              <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <VuiTypography variant="h6" color="white" fontWeight="bold">Your Transactions</VuiTypography>
                <VuiTypography variant="caption" color="text">23 - 30 March 2020</VuiTypography>
              </VuiBox>
              
              <VuiTypography variant="caption" color="text" fontWeight="bold" display="block" my={2}>NEWEST</VuiTypography>
              {transactionsData.newest.map((t, i) => (
                <VuiBox display="flex" alignItems="center" py={1} key={i}>
                  <VuiBox display="flex" alignItems="center" justifyContent="center" width="30px" height="30px" sx={{ border: `1px solid ${t.color === "success" ? "#01b574" : "#ee5d50"}`, borderRadius: "50%", color: t.color === "success" ? "#01b574" : "#ee5d50", mr: 2 }}>{t.icon}</VuiBox>
                  <VuiBox><VuiTypography variant="button" color="white" fontWeight="bold" display="block">{t.name}</VuiTypography><VuiTypography variant="caption" color="text">{t.date}</VuiTypography></VuiBox>
                  <VuiTypography variant="button" color={t.color} fontWeight="bold" sx={{ ml: "auto" }}>{t.price}</VuiTypography>
                </VuiBox>
              ))}

              <VuiTypography variant="caption" color="text" fontWeight="bold" display="block" my={2}>YESTERDAY</VuiTypography>
              {transactionsData.yesterday.map((t, i) => (
                <VuiBox display="flex" alignItems="center" py={1} key={i}>
                  <VuiBox display="flex" alignItems="center" justifyContent="center" width="30px" height="30px" sx={{ border: `1px solid ${t.color === "success" ? "#01b574" : t.color === "error" ? "#ee5d50" : "#fff"}`, borderRadius: "50%", color: t.color === "success" ? "#01b574" : t.color === "error" ? "#ee5d50" : "#fff", mr: 2 }}>{t.icon}</VuiBox>
                  <VuiBox><VuiTypography variant="button" color="white" fontWeight="bold" display="block">{t.name}</VuiTypography><VuiTypography variant="caption" color="text">{t.date}</VuiTypography></VuiBox>
                  <VuiTypography variant="button" color={t.color} fontWeight="bold" sx={{ ml: "auto" }}>{t.price}</VuiTypography>
                </VuiBox>
              ))}
            </Card>
          </Grid>

        </Grid>
      </VuiBox>
    </>
  );
}

export default Billing;