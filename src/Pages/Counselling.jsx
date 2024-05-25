import { Box, Button } from "@mui/material";
import Header from "../Components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";

const Class = () => {
  const [Students, setStudents] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/student`)
      .then((res) => {
        // Format date values before setting the state
        const formattedStudents = res.data.map((student) => ({
          ...student,
          // Assuming "datedenaissance" is the date field
          datedenaissance: moment(student.datedenaissance).format("YYYY-MM-DD"), // Format the date as desired
        }));
        setStudents(formattedStudents);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    // Display SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // student confirmed deletion, proceed with delete operation
        const apiUrl = import.meta.env.VITE_API_URL;
        axios
          .delete(`${apiUrl}/student/${id}`)
          .then(() => {
            // If the delete operation is successful, remove the student from the state
            setStudents(Students.filter((student) => student._id !== id));
            console.log("student deleted successfully");
          })
          .catch((err) => {
            console.log("Error deleting student:", err);
          });
      }
    });
  };

  const columns = [
    {
      flex: 1,
      id: "filiere_id",
      field: "filiere",
      headerName: "FILIERE",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      id: "classe_id",
      field: "classe",
      headerName: "CLASSE",
      align: "left",
      headerAlign: "left",
    },
    {
      flex: 1,
      id: "name_id",
      field: "name",
      headerName: "NAME",
      align: "left",
      headerAlign: "left",
    },
   
    {
      id: "moyg_id",
      field: "moyg",
      headerName: "Moyenne generale",
      align: "center",
      headerAlign: "center",
    },
    {
      id: "choix_id",
      field: "choix",
      headerName: "CHOIX",
      align: "center",
      headerAlign: "center",
    },
    {
      id: "orient_id",
      field: "orient",
      headerName: "Counselling",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      flex: 1,
      field: "action",
      headerName: "Action",
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Box>
      <Header title={"Counselling"} subTitle={"Managing the Counselling"} />

      <Box sx={{ height: 400, mx: "auto", paddingRight: "15px" }}>
        <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
          rows={Students}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Class;
