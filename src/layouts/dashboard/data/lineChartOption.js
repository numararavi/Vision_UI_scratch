const lineChartOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  tooltip: {
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    show: false,
    labels: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    show: false,
    labels: { show: false },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    yaxis: { lines: { show: true } },
    xaxis: { lines: { show: false } },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#0075FF", "#2CD9FF"],
  },
  dataLabels: { enabled: false },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: ["#0075FF", "#2CD9FF"],
    width: 3,
    dashArray: 0,
  },
  markers: { size: 0 },
};

export default lineChartOptions;