import rgba from "./rgba";

function gradientChartLine(color, opacity = 0.2) {
  return {
    color,
    opacity,
    rgba: rgba(color, opacity),
  };
}

export default gradientChartLine;
