import VuiBox from "components/VuiBox";
import { useVisionUIController } from "context";
import PropTypes from "prop-types";

function DashboardLayout({ children }) {
  const [controller] = useVisionUIController();
  const { miniSidenav } = controller;

  return (
    <VuiBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",
        // Jika miniSidenav true, margin jadi 0. Jika false, margin 274px
        marginLeft: miniSidenav ? 0 : pxToRem(274),
        transition: transitions.create(["margin-left", "margin-right"], {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),
        [breakpoints.down("xl")]: {
          marginLeft: 0,
        },
      })}
    >
      {children}
    </VuiBox>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;