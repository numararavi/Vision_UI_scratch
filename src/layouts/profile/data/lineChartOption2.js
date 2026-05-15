export const lineChartOptions2 = {
  chart: { toolbar: { show: false } },
  tooltip: { theme: "dark" },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth", width: 2 },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: { style: { colors: "#c8cfca", fontSize: "10px" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: { style: { colors: "#c8cfca", fontSize: "10px" } },
  },
  grid: {
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  colors: ["#17c1e8"],
  fill: {
    type: "gradient",
    gradient: { shade: "dark", gradientToColors: ["#000"], shadeIntensity: 1, type: "vertical", opacityFrom: 1, opacityTo: 1, stops: [0, 100, 100, 100] },
  },
};