import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button} from "@mui/material";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Admin = () => {
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/auth/register`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
      console.log(users);
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
        // User confirmed deletion, proceed with delete operation
        const apiUrl = import.meta.env.VITE_API_URL;
        axios
          .delete(`${apiUrl}/auth/register/${id}`)
          .then(() => {
            // If the delete operation is successful, remove the user from the state
            setUsers(users.filter((user) => user._id !== id));
            console.log("User deleted successfully");
          })
          .catch((err) => {
            console.log("Error deleting user:", err);
          });
      }
    });
  };


  const columns = [
  
    {
      field: "username",
      headerName: "username",
      align: "left",
      headerAlign: "left",
      flex: 1,
    },
    {
      field: "email",
      headerName: "email",
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
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

      <Box sx={{ height: 400, mx: "auto", paddingRight: "15px" }}>
        <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
          rows={users}
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
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Admin;
