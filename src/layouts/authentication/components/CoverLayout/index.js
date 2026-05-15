import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

function CoverLayout({ color, header, title, description, image, children }) {
  return (
    <PageLayout
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          image &&
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <VuiBox mt={10} mb={10}>
        <Grid container justifyContent="center">
          <Grid item xs={11} sm={8} md={5} lg={4}>
            <VuiBox mt={6} mb={3} textAlign="center">
              <VuiTypography variant="h2" color="white" fontWeight="bold">
                {title}
              </VuiTypography>
              <VuiBox mt={1} mb={2}>
                <VuiTypography variant="body2" color="white" fontWeight="regular">
                  {description}
                </VuiTypography>
              </VuiBox>
            </VuiBox>
            <VuiBox
              p={3}
              sx={({ palette: { gradients }, functions: { linearGradient } }) => ({
                background: linearGradient(
                  gradients.dark.main,
                  gradients.dark.state,
                  gradients.dark.deg
                ),
                borderRadius: "20px",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              })}
            >
              {children}
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </PageLayout>
  );
}

CoverLayout.defaultProps = {
  color: "info",
  title: "",
  description: "",
};

CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;