// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// React icons
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function ProfileInfoCard() {
  const { white } = colors;
  const { size, fontWeightBold } = typography;

  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          Profile Information
        </VuiTypography>
        <Tooltip title="Edit Profile" placement="top">
          <Icon sx={{ color: white.main, cursor: "pointer" }}>edit</Icon>
        </Tooltip>
      </VuiBox>
      <VuiBox>
        <VuiBox mb={2} lineHeight={1}>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two paths are equally difficult, choose the one more painful in the short term. If you have two choices to make, and they’re relatively equal, take the path that is more difficult and more painful in the short term.
          </VuiTypography>
        </VuiBox>
        <VuiBox opacity={0.3}>
          <Divider sx={{ backgroundColor: white.main }} />
        </VuiBox>
        <VuiBox>
          <VuiBox display="flex" py={1} pr={2}>
            <VuiTypography variant="button" fontWeight="bold" color="white" textTransform="capitalize" sx={{ minWidth: "120px" }}>
              Full Name:
            </VuiTypography>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              Mark Johnson
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" py={1} pr={2}>
            <VuiTypography variant="button" fontWeight="bold" color="white" textTransform="capitalize" sx={{ minWidth: "120px" }}>
              Mobile:
            </VuiTypography>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              (44) 123 1234 123
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" py={1} pr={2}>
            <VuiTypography variant="button" fontWeight="bold" color="white" textTransform="capitalize" sx={{ minWidth: "120px" }}>
              Email:
            </VuiTypography>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              mark@simmmple.com
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" py={1} pr={2}>
            <VuiTypography variant="button" fontWeight="bold" color="white" textTransform="capitalize" sx={{ minWidth: "120px" }}>
              Location:
            </VuiTypography>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              United States
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" py={1} pr={2} alignItems="center">
            <VuiTypography variant="button" fontWeight="bold" color="white" textTransform="capitalize" sx={{ minWidth: "120px" }}>
              Social:
            </VuiTypography>
            <VuiBox display="flex">
              <VuiBox color="white" mr={2}>
                <FaFacebook cursor="pointer" />
              </VuiBox>
              <VuiBox color="white" mr={2}>
                <FaTwitter cursor="pointer" />
              </VuiBox>
              <VuiBox color="white">
                <FaInstagram cursor="pointer" />
              </VuiBox>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ProfileInfoCard; 