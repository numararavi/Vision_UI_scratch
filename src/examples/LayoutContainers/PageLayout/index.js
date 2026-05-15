import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

function PageLayout({ children }) {
  return (
    <VuiBox
      width="100vw"
      maxWidth="100%"
      height="100%"
      minHeight="100vh"
      sx={{
        overflowX: "hidden",
        position: "relative",
        background: "#060b28", // Navy pekat Vision UI
      }}
    >
      {children}
    </VuiBox>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;