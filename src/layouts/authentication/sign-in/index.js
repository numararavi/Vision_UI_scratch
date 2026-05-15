import { useState } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

// @mui icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";

// Layout components
import PageLayout from "examples/LayoutContainers/PageLayout";
import Footer from "layouts/authentication/components/Footer";

// Image (Pastikan file ini ada di assets/images/signInImage.png)
import bgSignIn from "assets/images/signInImage.png";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Reusable style untuk Input agar seragam
  const inputStyles = {
    backgroundColor: "#0f1535 !important",
    mt: 1,
    border: "1px solid rgba(255, 255, 255, 0.2) !important", // Border putih tipis
    transition: "all 200ms ease",
    "&:hover": {
      border: "1px solid rgba(255, 255, 255, 0.3) !important",
    },
    "&.Mui-focused": {
      border: "1px solid rgba(255, 255, 255, 0.5) !important",
    },
    "& input": {
      color: "white !important", // Teks ketikan jadi putih
      fontSize: "0.875rem",
      "&::placeholder": {
        color: "rgba(255, 255, 255, 0.7) !important", // Placeholder jadi putih terang
        opacity: 1,
      },
    },
  };

  return (
    <PageLayout>
      <Grid container sx={{ minHeight: "100vh" }}>
        {/* SISI KIRI: Gambar & Teks (Hanya muncul di layar Laptop/Desktop) */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${bgSignIn})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "rgba(6, 11, 40, 0.5)", // Overlay gelap agar teks terbaca
            },
          }}
        >
          <VuiBox sx={{ zIndex: 1, textAlign: "center", px: 10 }}>
            <VuiTypography variant="caption" color="white" fontWeight="bold" sx={{ letterSpacing: 2 }}>
              INSPIRED BY THE FUTURE:
            </VuiTypography>
            <VuiTypography variant="h1" color="white" fontWeight="bold" sx={{ mt: 2, lineHeight: 1.2 }}>
              THE VISION UI DASHBOARD
            </VuiTypography>
          </VuiBox>
        </Grid>

        {/* SISI KANAN: Form Login */}
        <Grid item xs={12} lg={6} display="flex" flexDirection="column" justifyContent="center">
          <VuiBox p={5} sx={{ maxWidth: "450px", mx: "auto", width: "100%" }}>
            <VuiBox mb={3}>
              <VuiTypography variant="h3" color="white" fontWeight="bold">
                Nice to see you!
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Enter your email and password to sign in
              </VuiTypography>
            </VuiBox>

            <VuiBox component="form" role="form">
              {/* INPUT EMAIL */}
              <VuiBox mb={2}>
                <VuiTypography variant="button" color="white" fontWeight="medium" sx={{ ml: 0.5 }}>
                  Email
                </VuiTypography>
                <VuiInput 
                  type="email" 
                  placeholder="Your email address..." 
                  sx={inputStyles} 
                />
              </VuiBox>

              {/* INPUT PASSWORD */}
              <VuiBox mb={2}>
                <VuiTypography variant="button" color="white" fontWeight="medium" sx={{ ml: 0.5 }}>
                  Password
                </VuiTypography>
                <VuiInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password..."
                  sx={inputStyles}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword} sx={{ color: "white" }}>
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </VuiBox>

              {/* REMEMBER ME */}
              <VuiBox display="flex" alignItems="center" mb={3}>
                <VuiSwitch checked={rememberMe} onChange={handleSetRememberMe} color="info" />
                <VuiTypography 
                  variant="button" 
                  color="white" 
                  sx={{ ml: 1, cursor: "pointer", userSelect: "none" }}
                  onClick={handleSetRememberMe}
                >
                  Remember me
                </VuiTypography>
              </VuiBox>

              {/* BUTTON SIGN IN */}
              <VuiButton color="info" fullWidth size="large" sx={{ py: 1.5, fontWeight: "bold" }}>
                SIGN IN
              </VuiButton>

              {/* FOOTER LINK */}
              <VuiBox mt={3} textAlign="center">
                <VuiTypography variant="button" color="text">
                  Don't have an account?{" "}
                  <VuiTypography 
                    component={Link} 
                    to="/authentication/sign-up" 
                    variant="button" 
                    color="white" 
                    fontWeight="bold"
                  >
                    Sign up
                  </VuiTypography>
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </VuiBox>
          <Footer />
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export default SignIn;