import PropTypes from "prop-types";
import { NavLink } from "react-router-dom"; // Tambahkan import ini

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

// Custom styles
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/Styles/sidenavCollapse";

// Vision UI Dashboard React context
import { useVisionUIController } from "context";

function SideNavCollapse({ icon, name, children, active, route, ...rest }) {
  const [controller] = useVisionUIController();
  const { miniSidenav, transparentSidenav } = controller;

  const ownerState = { active, miniSidenav, transparentSidenav };

  return (
    <>
      {/* Bungkus ListItem dengan NavLink agar bisa routing */}
      <ListItem 
        component={route ? NavLink : "li"} 
        to={route} 
        sx={{ textDecoration: "none", display: "block" }}
      >
        <VuiBox {...rest} sx={(theme) => collapseItem(theme, ownerState)}>
          <ListItemIcon sx={(theme) => collapseIconBox(theme, ownerState)}>
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, ownerState)}>{icon}</Icon>
            ) : (
              <VuiBox 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  "& svg": { color: "#fff !important", fontSize: "16px" } 
                }}
              >
                {icon}
              </VuiBox>
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) => collapseText(theme, ownerState)}
          />
        </VuiBox>
      </ListItem>
      
      {children && (
        <Collapse in={active} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

SideNavCollapse.defaultProps = {
  active: false,
  children: false,
  route: "", // Tambahkan default value
};

SideNavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
  route: PropTypes.string, // Tambahkan prop type
};

export default SideNavCollapse;