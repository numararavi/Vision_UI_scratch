// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiAvatar from "components/VuiAvatar";

function ProjectCard({ image, label, title, description, action, authors }) {
  const renderAuthors = authors.map(({ image: authorImage, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <VuiAvatar
        src={authorImage}
        alt={name}
        size="xs"
        sx={({ borders, palette }) => ({
          // Kita tambahkan pengecekan aman agar tidak error 'reading 2'
          border: borders && borders.borderWidth ? `${borders.borderWidth[2]} solid ${palette.dark.main}` : "2px solid #060b28",
          cursor: "pointer",
          position: "relative",
          "&:not(:first-of-type)": { ml: -1.25 },
          "&:hover, &:focus": { zIndex: "10" },
        })}
      />
    </Tooltip>
  ));

  return (
    <VuiBox display="flex" flexDirection="column" height="100%">
      <VuiBox position="relative" width="100.5%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { xl } }) => xl,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </VuiBox>
      <VuiBox pt={3} px={0.5}>
        <VuiBox mb={1}>
          <VuiTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
            {label}
          </VuiTypography>
        </VuiBox>
        <VuiBox mb={1}>
          {action.type === "internal" ? (
            <VuiTypography
              variant="h5"
              color="white"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {title}
            </VuiTypography>
          ) : (
            <VuiTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              color="white"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {title}
            </VuiTypography>
          )}
        </VuiBox>
        <VuiBox mb={3} lineHeight={0}>
          <VuiTypography variant="button" fontWeight="regular" color="text">
            {description}
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <VuiButton
              variant="outlined"
              size="small"
              color="white"
            >
              {action.label}
            </VuiButton>
          ) : (
            <VuiButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color="white"
            >
              {action.label}
            </VuiButton>
          )}
          <VuiBox display="flex">{renderAuthors}</VuiBox>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

export default ProjectCard;