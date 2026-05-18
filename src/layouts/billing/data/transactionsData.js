import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const transactionsData = {
  newest: [
    {
      name: "Netflix",
      date: "27 March 2020, at 12:30 PM",
      price: "- $2,500",
      color: "error",
      icon: <ArrowDownwardIcon fontSize="small" />,
    },
    {
      name: "Apple",
      date: "27 March 2020, at 12:30 PM",
      price: "+ $2,500",
      color: "success",
      icon: <ArrowUpwardIcon fontSize="small" />,
    },
  ],
  yesterday: [
    {
      name: "Stripe",
      date: "26 March 2020, at 13:45 PM",
      price: "+ $800",
      color: "success",
      icon: <ArrowUpwardIcon fontSize="small" />,
    },
    {
      name: "HubSpot",
      date: "26 March 2020, at 12:30 PM",
      price: "+ $1,700",
      color: "success",
      icon: <ArrowUpwardIcon fontSize="small" />,
    },
    {
      name: "Webflow",
      date: "26 March 2020, at 05:00 AM",
      price: "Pending",
      color: "white",
      icon: <PriorityHighIcon fontSize="small" />,
    },
    {
      name: "Microsoft",
      date: "25 March 2020, at 16:30 PM",
      price: "- $987",
      color: "error",
      icon: <ArrowDownwardIcon fontSize="small" />,
    },
  ],
};

export default transactionsData;