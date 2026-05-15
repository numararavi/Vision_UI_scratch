import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Icon, Tooltip } from "@mui/material";
import { useVisionUIController } from "../../context";

function SidenavCollapse({ icon, name, active, route, href }) {
  const [controller] = useVisionUIController();
  const { miniSidenav } = controller;

  const linkProps = href
    ? {
        component: "a",
        href,
        target: "_blank",
        rel: "noreferrer",
      }
    : {
        component: NavLink,
        to: route || "#",
      };

  const content = (
    <ListItemButton
      {...linkProps}
      sx={{
        color: "white",
        borderRadius: 2,
        mx: miniSidenav ? 1 : 1.25,
        my: 0.5,
        minHeight: 44,
        justifyContent: miniSidenav ? "center" : "flex-start",
        backgroundColor: active ? "rgba(255,255,255,0.16)" : "transparent",
        border: active ? "1px solid rgba(255,255,255,0.22)" : "1px solid transparent",
        transition: "all 200ms ease",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.12)",
          borderColor: "rgba(255,255,255,0.2)",
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: miniSidenav ? 0 : 36, color: "white", display: "grid", placeItems: "center" }}>
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </ListItemIcon>

      {!miniSidenav && (
        <ListItemText
          primary={name}
          primaryTypographyProps={{
            variant: "button",
            fontWeight: active ? "bold" : "medium",
            color: "white",
          }}
        />
      )}
    </ListItemButton>
  );

  return <ListItem disablePadding>{miniSidenav ? <Tooltip title={name} placement="right">{content}</Tooltip> : content}</ListItem>;
}

SidenavCollapse.defaultProps = {
  active: false,
  route: "#",
  href: undefined,
};

SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  route: PropTypes.string,
  href: PropTypes.string,
};

export default SidenavCollapse;