import colors from "./colors";
import boxShadow from "../functions/boxShadow";

const { dark } = colors;

const boxShadows = {
  xs: boxShadow([0, 2], [8, 0], dark.main, 0.2),
  sm: boxShadow([0, 4], [12, 0], dark.main, 0.25),
  md: boxShadow([0, 8], [20, 0], dark.main, 0.3),
};

export default boxShadows;
