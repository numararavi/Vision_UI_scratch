const barChartOptions = {
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
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    show: false,
    labels: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    show: true,
    color: "#56577A",
    labels: {
      show: true,
      style: {
        colors: "#56577A",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
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
    colors: ["#FFFFFF"],
  },
  dataLabels: { enabled: false },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "12px",
    },
  },
  states: {
    normal: { filter: { type: "none", value: 0 } },
    hover: { filter: { type: "none", value: 0 } },
    active: { filter: { type: "none", value: 0 } },
  },
};

export default barChartOptions;