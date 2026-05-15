import { Card, CardContent, Icon } from "@mui/material";

import { useVisionUIController } from "../../context";
import VuiButton from "../../components/VuiButton";
import VuiBox from "../../components/VuiBox";
import VuiTypography from "../../components/VuiTypography";

function SidenavCard({ color }) {
  const [controller] = useVisionUIController();
  const { miniSidenav } = controller;

  return (
    <Card sx={{ borderRadius: 3, background: "rgba(255,255,255,0.06)", color: "white" }}>
      <CardContent sx={{ p: 2 }}>
        <VuiBox display="flex" alignItems="center" gap={1} mb={1}>
          <VuiBox width="2rem" height="2rem" borderRadius="md" display="flex" alignItems="center" justifyContent="center" sx={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
            <Icon fontSize="small">star</Icon>
          </VuiBox>
          {!miniSidenav && <VuiTypography variant="h6" color="white">Need help?</VuiTypography>}
        </VuiBox>
        {!miniSidenav && (
          <>
            <VuiTypography variant="caption" color="white">Please check our docs</VuiTypography>
            <VuiBox mt={1.5}>
              <VuiButton color={color || "info"} variant="contained" fullWidth component="a" href="#">
                DOCUMENTATION
              </VuiButton>
            </VuiBox>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
