import React from "react";
import PropTypes from "prop-types";

// @mui material components
import { Table as MuiTable, TableBody, TableContainer, TableHead, TableRow, TableCell } from "@mui/material";

function Table({ columns, rows }) {
  // Render kepala tabel (Headers)
  const renderColumns = columns.map(({ name, align }, key) => (
    <TableCell
      key={key}
      align={align || "left"}
      sx={{
        padding: "12px 24px",
        fontSize: "0.75rem",
        fontWeight: "700",
        opacity: 0.7,
        textTransform: "uppercase",
        color: "#718096 !important",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05) !important",
      }}
    >
      {name}
    </TableCell>
  ));

  // Render isi data (Rows)
  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const tableCells = columns.map(({ name, align }) => (
      <TableCell
        key={name}
        align={align || "left"}
        sx={{
          padding: "12px 24px",
          fontSize: "0.875rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05) !important",
        }}
      >
        {row[name]}
      </TableCell>
    ));

    return <TableRow key={rowKey}>{tableCells}</TableRow>;
  });

  return (
    <TableContainer sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
      <MuiTable>
        <TableHead>
          <TableRow>{renderColumns}</TableRow>
        </TableHead>
        <TableBody>{renderRows}</TableBody>
      </MuiTable>
    </TableContainer>
  );
}

Table.defaultProps = {
  columns: [],
  rows: [],
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;