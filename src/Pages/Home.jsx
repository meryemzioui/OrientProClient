import { Box, Button, Card, Stack, useTheme } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import { PieChart } from "@mui/x-charts/PieChart";
import Header from "../Components/Header";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const Statics = () => {

    const theme = useTheme();
    const data1 = [
        {
          id: "javascript",
          label: "javascript",
          value: 40,
          color: "hsl(111, 90%, 90%)",
        },
        {
          id: "sass",
          label: "sass",
          value: 60,
          color: "hsl(22, 90%, 90%)",
        },
      ];
      const data2 = [
        {
          id: "javascript",
          label: "javascript",
          value: 70,
          color: "hsl(111, 90%, 90%)",
        },
        {
          id: "sass",
          label: "sass",
          value: 30,
          color: "hsl(22, 90%, 90%)",
        },
      ];
      const data3 = [
        {
          id: "javascript",
          label: "javascript",
          value: 44,
          color: "hsl(111, 90%, 90%)",
        },
        {
          id: "sass",
          label: "sass",
          value: 66,
          color: "hsl(22, 90%, 90%)",
        },
      ];
      const data4 = [
        {
          id: "javascript",
          label: "javascript",
          value: 77,
          color: "hsl(111, 90%, 90%)",
        },
        {
          id: "sass",
          label: "sass",
          value: 33,
          color: "hsl(22, 90%, 90%)",
        },
      ];
  return (

    <Box>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />
  
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
</Stack>
<Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={<EmailIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"12,361"}
        subTitle={"Emails Sent"}
        increase={"+14%"}
        data={data1} scheme={"nivo"}      />

      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subTitle={"Sales obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"} 
      />

      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subTitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"} 
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        increase={"+43%"}
        data={data4}
        scheme={"dark2"} 
      />
    </Stack>





      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </Box>
  );
};

export default Statics;