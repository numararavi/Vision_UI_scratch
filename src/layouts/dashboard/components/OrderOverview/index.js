import { Card, Icon } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import VuiBox from "../../../../components/VuiBox";
import VuiTypography from "../../../../components/VuiTypography";

const orderEvents = [
  {
    title: "Design changes",
    description: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    icon: "notifications",
    color: "#0075FF",
  },
  {
    title: "New order #1832412",
    description: "Order has been received",
    date: "21 DEC 11 PM",
    icon: "code",
    color: "#e31a1a",
  },
  {
    title: "Server payments for April",
    description: "Received payment online",
    date: "21 DEC 9:34 PM",
    icon: "shopping_cart",
    color: "#4299e1",
  },
  {
    title: "New card added #4395133",
    description: "Card details have been saved",
    date: "20 DEC 2:20 AM",
    icon: "credit_card",
    color: "#ffb547",
  },
  {
    title: "Paypal Transfer",
    description: "Bill has been paid",
    date: "18 DEC 4:54 AM",
    icon: "cloud_download",
    color: "#01b574",
  },
  {
    title: "New order #9583120",
    description: "Order was placed",
    date: "17 DEC",
    icon: "image",
    color: "#8ca1ff",
  },
];

function OrderOverview() {
  return (
    <Card
      sx={{
        backgroundImage: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 3.29%, rgba(10, 14, 35, 0.69) 92.1%)",
        border: "1px solid rgba(145, 160, 255, 0.16)",
        borderRadius: "18px",
        p: 3,
      }}
    >
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <VuiBox>
          <VuiTypography variant="h6" color="white" fontWeight="bold">
            Orders overview
          </VuiTypography>
          <VuiTypography variant="caption" color="text">
            <Icon sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5 }}>trending_up</Icon>
            +30% this month
          </VuiTypography>
        </VuiBox>
        <Icon sx={{ color: "rgba(255,255,255,0.6)" }}>more_horiz</Icon>
      </VuiBox>

      <Timeline position="left" sx={{ p: 0 }}>
        {orderEvents.map((event, index) => (
          <TimelineItem key={event.title} sx={{ minHeight: 70 }}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  background: event.color,
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.35)",
                }}
              >
                <Icon sx={{ color: "white", fontSize: 18 }}>{event.icon}</Icon>
              </TimelineDot>
              {index !== orderEvents.length - 1 && (
                <TimelineConnector sx={{ background: "rgba(145, 160, 255, 0.14)" }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: 1.5 }}>
              <VuiTypography variant="button" color="white" fontWeight="bold">
                {event.title}
              </VuiTypography>
              <VuiTypography variant="caption" color="text" display="block" mt={0.4}>
                {event.description}
              </VuiTypography>
              <VuiTypography variant="caption" color="text" display="block" mt={0.6}>
                {event.date}
              </VuiTypography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
  );
}

export default OrderOverview;
