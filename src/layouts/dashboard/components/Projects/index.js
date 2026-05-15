import { Avatar, AvatarGroup, Card, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, LinearProgress } from "@mui/material";
import VuiBox from "../../../../components/VuiBox";
import VuiTypography from "../../../../components/VuiTypography";
import projectsTableData from "./data";

function Projects() {
  return (
    <Card
      sx={{
        backgroundImage: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.69) 92.1%)",
        border: "1px solid rgba(145, 160, 255, 0.16)",
        borderRadius: "18px",
        overflow: "hidden",
      }}
    >
      <VuiBox p={3} display="flex" justifyContent="space-between" alignItems="center">
        <VuiBox>
          <VuiTypography variant="h6" color="white" fontWeight="bold">
            Projects
          </VuiTypography>
          <VuiTypography variant="caption" color="text">
            30 done this month
          </VuiTypography>
        </VuiBox>
        <Icon sx={{ color: "rgba(255,255,255,0.6)" }}>more_vert</Icon>
      </VuiBox>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ borderBottom: "1px solid rgba(145, 160, 255, 0.14)" }}>
              <TableCell sx={headCellStyles}>Companies</TableCell>
              <TableCell sx={headCellStyles}>Members</TableCell>
              <TableCell sx={headCellStyles}>Budget</TableCell>
              <TableCell sx={headCellStyles}>Completion</TableCell>
              <TableCell sx={{ ...headCellStyles, textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectsTableData.map((project) => (
              <TableRow key={project.name} sx={{ borderBottom: "1px solid rgba(145, 160, 255, 0.12)", '&:hover': { backgroundColor: 'rgba(255,255,255,0.02)' } }}>
                <TableCell sx={{ color: "rgba(255,255,255,0.87)" }}>
                  <VuiBox display="flex" alignItems="center" gap={1.5}>
                    <VuiBox
                      width={36}
                      height={36}
                      borderRadius="12px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.16)",
                      }}
                    >
                      <VuiTypography variant="button" color="white" fontWeight="bold">
                        {project.name[0]}
                      </VuiTypography>
                    </VuiBox>
                    <VuiTypography variant="body2" color="white" fontWeight="medium">
                      {project.name}
                    </VuiTypography>
                  </VuiBox>
                </TableCell>

                <TableCell>
                  <AvatarGroup max={4} sx={{ justifyContent: "flex-start" }}>
                    {project.members.map((member) => (
                      <Tooltip key={member.name} title={member.name} placement="top">
                        <Avatar sx={{ width: 28, height: 28, fontSize: 11, bgcolor: member.color }}>
                          {member.initials}
                        </Avatar>
                      </Tooltip>
                    ))}
                  </AvatarGroup>
                </TableCell>

                <TableCell sx={{ color: "rgba(255,255,255,0.87)" }}>
                  <VuiTypography variant="body2" color="white">
                    {project.budget}
                  </VuiTypography>
                </TableCell>

                <TableCell>
                  <VuiBox display="flex" alignItems="center" gap={1}>
                    <LinearProgress
                      variant="determinate"
                      value={project.completion}
                      sx={{
                        width: "90px",
                        height: "6px",
                        borderRadius: "3px",
                        background: "rgba(145, 160, 255, 0.14)",
                        "& .MuiLinearProgress-bar": {
                          background: "linear-gradient(90deg, #0075FF 0%, #2CD9FF 100%)",
                          borderRadius: "3px",
                        },
                      }}
                    />
                    <VuiTypography variant="caption" color="text" sx={{ minWidth: "32px" }}>
                      {project.completion}%
                    </VuiTypography>
                  </VuiBox>
                </TableCell>

                <TableCell sx={{ textAlign: "center" }}>
                  <Icon sx={{ cursor: "pointer", color: "rgba(255,255,255,0.6)" }}>more_horiz</Icon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

const headCellStyles = {
  color: "#8ca1ff",
  fontWeight: "bold",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
};

export default Projects;
