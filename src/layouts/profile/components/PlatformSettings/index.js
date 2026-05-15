import { useState } from "react";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiSwitch from "components/VuiSwitch";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);

  return (
    <Card sx={{ minHeight: "100%" }}>
      <VuiBox mb="26px">
        <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          Platform Settings
        </VuiTypography>
      </VuiBox>
      <VuiBox lineHeight={1.25}>
        <VuiTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          Account
        </VuiTypography>
        <VuiBox display="flex" alignItems="center" mb="14px" mt="10px">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </VuiBox>
          <VuiBox ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">Email me when someone follows me</VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" alignItems="center" mb="14px">
          <VuiBox mt={0.25}>
            <VuiSwitch color="info" checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </VuiBox>
          <VuiBox ml={2}>
            <VuiTypography variant="button" fontWeight="regular" color="text">Email me when someone answers on my post</VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default PlatformSettings;