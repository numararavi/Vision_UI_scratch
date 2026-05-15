export const lineChartOptions1 = {
  chart: { toolbar: { show: false } },
  tooltip: { theme: "dark" },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth" },
  xaxis: {
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: { style: { colors: "#c8cfca", fontSize: "10px" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: { style: { colors: "#c8cfca", fontSize: "10px" } },
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  colors: ["#0075ff", "#2cd9ff"],
};