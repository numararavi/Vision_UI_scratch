import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export default styled(Avatar)(({ theme, ownerState = {} }) => { // Tambahkan default value {}
  const { palette, borders, boxShadows, functions } = theme;
  
  // Berikan nilai default juga di sini agar lebih aman
  const { shadow = "none", bgColor = "transparent", size = "md" } = ownerState; 
  
  const { gradients, white } = palette;
  const { pxToRem, linearGradient } = functions;
  // Ukuran dinamis
  const sizeValue = {
    xs: { width: pxToRem(24), height: pxToRem(24), fontSize: pxToRem(10) },
    sm: { width: pxToRem(36), height: pxToRem(36), fontSize: pxToRem(12) },
    md: { width: pxToRem(48), height: pxToRem(48), fontSize: pxToRem(14) },
    lg: { width: pxToRem(58), height: pxToRem(58), fontSize: pxToRem(18) },
    xl: { width: pxToRem(74), height: pxToRem(74), fontSize: pxToRem(22) },
    xxl: { width: pxToRem(110), height: pxToRem(110), fontSize: pxToRem(30) },
  };

  return {
    background: bgColor === "transparent" 
      ? "transparent" 
      : linearGradient(gradients[bgColor].main, gradients[bgColor].state),
    color: white.main,
    fontWeight: 600,
    boxShadow: boxShadows[shadow] || "none",
    ...sizeValue[size],
    borderRadius: borders.borderRadius.md,
  };
});