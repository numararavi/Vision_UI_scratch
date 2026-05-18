/* eslint-disable react/prop-types */
import Chip from "@mui/material/Chip"; // Ganti VuiBadge dengan Chip resmi MUI

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";

// Images
import avatar1 from "assets/images/bruce-mars.jpg";
import avatar2 from "assets/images/ivana-squares.jpg";

function Author({ image, name, email }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          {email}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

function Function({ title, description }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {title}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {description}
      </VuiTypography>
    </VuiBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "author", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={avatar1} name="Esthera Jackson" email="esthera@simmmple.com" />,
      function: <Function title="Manager" description="Organization" />,
      status: (
        // Menggunakan Chip MUI dengan style kustom pengganti VuiBadge
        <Chip 
          label="ONLINE" 
          size="small"
          sx={{
            background: "rgba(1, 181, 116, 0.2)", // Hijau transparan khas Vision UI
            color: "#01b574",
            fontSize: "10px",
            fontWeight: "bold",
            borderRadius: "8px",
            height: "22px"
          }}
        />
      ),
      employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          23/04/18
        </VuiTypography>
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      author: <Author image={avatar2} name="Alexa Lini" email="alexa@simmmple.com" />,
      function: <Function title="Programmer" description="Developer" />,
      status: (
        <Chip 
          label="OFFLINE" 
          size="small"
          sx={{
            background: "rgba(255, 255, 255, 0.1)", // Abu-abu transparan
            color: "#fff",
            fontSize: "10px",
            fontWeight: "bold",
            borderRadius: "8px",
            height: "22px"
          }}
        />
      ),
      employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          11/01/19
        </VuiTypography>
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
  ],
};

export default authorsTableData;