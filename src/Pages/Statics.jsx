import { Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const Statics = () => {
  const [admis, setAdmis] = useState();
  const [nonadmis, setNonadmis] = useState();

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/student/admis`)
      .then((res) => {
        setAdmis(res.data.numberOfAdmittedStudents);
      })
      .catch((err) => console.log(err));
      
    axios
      .get(`${apiUrl}/student/nonadmis`)
      .then((res) => {
        setNonadmis(res.data.numberOfNonAdmittedStudents);
      })
      .catch((err) => console.log(err));
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <Box>
      <Header title={"STATICS"} subTitle={"Students final exam results"} />

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: admis, label: "Admis" },
              { id: 1, value: nonadmis, label: "Non Admis" },
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