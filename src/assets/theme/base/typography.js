import colors from "./colors";
import "./typography.css";
import pxToRem from "../functions/pxToRem";

const { dark } = colors;

const baseProperties = {
  fontFamily: '"Plus Jakarta Display", "Helvetica", "Arial", sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(10.4),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeRegular: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightMedium,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: { fontSize: pxToRem(48), lineHeight: 1.25, ...baseHeadingProperties },
  h2: { fontSize: pxToRem(36), lineHeight: 1.3, ...baseHeadingProperties },
  h3: { fontSize: pxToRem(30), lineHeight: 1.375, ...baseHeadingProperties },
  h4: { fontSize: pxToRem(24), lineHeight: 1.375, ...baseHeadingProperties },
  h5: { fontSize: pxToRem(20), lineHeight: 1.375, ...baseHeadingProperties },
  h6: { fontSize: pxToRem(16), lineHeight: 1.625, ...baseHeadingProperties },
  lg: { fontSize: pxToRem(18), lineHeight: 1.625, ...baseHeadingProperties },
  xxs: { fontSize: pxToRem(10), lineHeight: 1.625, ...baseHeadingProperties },

  subtitle1: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXL,
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.5,
    ...baseDisplayProperties,
  },
};

export default typography;
