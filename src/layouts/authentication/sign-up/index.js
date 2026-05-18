import { useState } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

// @mui icons & social icons
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
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

// Image Asset Sisi Kiri
import bgSignUp from "assets/images/signUpImage.png";

function SignUp() {
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  // Styling Input persis seperti di Tangkapan Layar (Glow Biru saat Focus)
  const inputStyles = {
    backgroundColor: "#0f1535 !important",
    mt: 1,
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.1) !important",
    transition: "all 0.2s ease-in-out",
    "&.Mui-focused": {
      border: "1px solid #0075ff !important",
      boxShadow: "0px 0px 12px rgba(0, 117, 255, 0.6) !important", // Efek Glow Biru menyala
    },
    "& input": {
      color: "white !important",
      fontSize: "0.875rem",
      "&::placeholder": {
        color: "rgba(255, 255, 255, 0.5) !important",
        opacity: 1,
      },
    },
  };

  // Styling Tombol Sosmed Kotak Rounded
  const socialBtnStyles = {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
    },
  };

  return (
    <PageLayout>
      <Grid container sx={{ minHeight: "100vh", background: "#060b28" }}>
        
        {/* SISI KIRI: Gambar Futuristik Ungu (Hanya Layar Besar) */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${bgSignUp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            p: 6,
          }}
        >
          <VuiBox sx={{ textAlign: "center", zIndex: 1 }}>
            <VuiTypography variant="caption" color="white" fontWeight="bold" sx={{ letterSpacing: 2, opacity: 0.7 }}>
              INSPIRED BY THE FUTURE:
            </VuiTypography>
            <VuiTypography variant="h1" color="white" fontWeight="bold" sx={{ mt: 1, letterSpacing: -1 }}>
              THE VISION UI DASHBOARD
            </VuiTypography>
          </VuiBox>
        </Grid>

        {/* SISI KANAN: Form Utama Welcome & Glassmorphism Card */}
        <Grid item xs={12} lg={6} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ py: 4 }}>
          
          {/* Header Atas - Sudah Dirapikan Tengah & Lebarnya */}
          <VuiBox 
            textAlign="center" 
            mb={3} 
            px={3} 
            display="flex" 
            flexDirection="column" 
            alignItems="center"
          >
            <VuiTypography variant="h2" color="white" fontWeight="bold" mb={1}>
              Welcome!
            </VuiTypography>
            <VuiTypography 
              variant="button" 
              color="text" 
              fontWeight="regular" 
              sx={{ 
                maxWidth: "380px",
                lineHeight: "1.5",
                fontSize: "14px",
                display: "block",
                opacity: 0.8
              }}
            >
              Use these awesome forms to login or create new account in your project for free.
            </VuiTypography>
          </VuiBox>

          {/* Kotak Glassmorphism Form Register */}
          <Card
            sx={{
              background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.49) 92.1%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
              p: 4,
              width: "100%",
              maxWidth: "450px",
              mx: "auto",
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            <VuiBox component="form" role="form">
              
              {/* Teks Register With di Tengah */}
              <VuiTypography 
                variant="button" 
                color="white" 
                fontWeight="medium" 
                display="block" 
                textAlign="center"
                mb={2}
                sx={{ width: "100%" }}
              >
                Register with
              </VuiTypography>

              {/* Tombol Social Media Group */}
              <VuiBox display="flex" justifyContent="center" gap={2} mb={3}>
                <VuiBox sx={socialBtnStyles}><FacebookIcon fontSize="small" /></VuiBox>
                <VuiBox sx={socialBtnStyles}><AppleIcon fontSize="small" /></VuiBox>
                <VuiBox sx={socialBtnStyles}><GoogleIcon fontSize="small" /></VuiBox>
              </VuiBox>

              {/* Teks OR di Tengah */}
              <VuiTypography 
                variant="caption" 
                color="text" 
                fontWeight="medium" 
                display="block" 
                textAlign="center"
                mb={2}
                sx={{ width: "100%", color: "rgba(255, 255, 255, 0.5) !important" }}
              >
                or
              </VuiTypography>

              {/* INPUT NAME */}
              <VuiBox mb={2}>
                <VuiTypography variant="button" color="white" fontWeight="regular" fontSize="12px" sx={{ ml: 0.5 }}>
                  Name
                </VuiTypography>
                <VuiInput 
                  placeholder="Your full name..." 
                  sx={inputStyles} 
                  startAdornment={<PersonIcon sx={{ color: "rgba(255,255,255,0.4)", mr: 1, fontSize: "18px" }} />}
                />
              </VuiBox>

              {/* INPUT EMAIL */}
              <VuiBox mb={2}>
                <VuiTypography variant="button" color="white" fontWeight="regular" fontSize="12px" sx={{ ml: 0.5 }}>
                  Email
                </VuiTypography>
                <VuiInput 
                  type="email" 
                  placeholder="Your email address..." 
                  sx={inputStyles} 
                  startAdornment={<EmailIcon sx={{ color: "rgba(255,255,255,0.4)", mr: 1, fontSize: "18px" }} />}
                />
              </VuiBox>

              {/* INPUT PASSWORD */}
              <VuiBox mb={3}>
                <VuiTypography variant="button" color="white" fontWeight="regular" fontSize="12px" sx={{ ml: 0.5 }}>
                  Password
                </VuiTypography>
                <VuiInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password..."
                  sx={inputStyles}
                  startAdornment={<LockIcon sx={{ color: "rgba(255,255,255,0.4)", mr: 1, fontSize: "18px" }} />}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword} sx={{ color: "rgba(255,255,255,0.6)" }} edge="end">
                        {showPassword ? <VisibilityOffIcon sx={{ fontSize: "18px" }} /> : <VisibilityIcon sx={{ fontSize: "18px" }} />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </VuiBox>

              {/* SWITCH REMEMBER ME */}
              <VuiBox display="flex" alignItems="center" mb={3}>
                <VuiSwitch checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} color="info" />
                <VuiTypography 
                  variant="button" 
                  color="white" 
                  fontSize="12px"
                  sx={{ ml: 1, cursor: "pointer", userSelect: "none" }}
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  Remember me
                </VuiTypography>
              </VuiBox>

              {/* TOMBOL SIGN UP */}
              <VuiButton color="info" fullWidth size="large" sx={{ py: 1.5, fontWeight: "bold", borderRadius: "12px" }}>
                SIGN UP
              </VuiButton>

              {/* FOOTER LINK KE SIGN IN */}
              <VuiBox mt={3} textAlign="center">
                <VuiTypography variant="button" color="text" fontSize="12px">
                  Already have an account?{" "}
                  <VuiTypography 
                    component={Link} 
                    to="/authentication/sign-in" 
                    variant="button" 
                    color="white" 
                    fontWeight="bold"
                    fontSize="12px"
                  >
                    Sign in
                  </VuiTypography>
                </VuiTypography>
              </VuiBox>

            </VuiBox>
          </Card>

          <Footer />
        </Grid>

      </Grid>
    </PageLayout>
  );
}

export default SignUp;