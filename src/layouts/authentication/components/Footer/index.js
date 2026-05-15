import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox component="footer" py={6} textAlign="center">
      <VuiTypography variant="button" color="text">
        @ 2026, Made with ❤️ by Simmmple & Creative Tim
      </VuiTypography>
    </VuiBox>
  );
}

export default Footer;