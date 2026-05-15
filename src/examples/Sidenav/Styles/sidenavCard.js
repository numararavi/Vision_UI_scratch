import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

export const card = () => ({
  borderRadius: 16,
  overflow: "hidden",
});

export const cardContent = () => ({
  p: 2,
  color: "white",
});

export const cardIconBox = {
  display: "grid",
  placeItems: "center",
};

export const cardIcon = () => ({ color: "white" });
