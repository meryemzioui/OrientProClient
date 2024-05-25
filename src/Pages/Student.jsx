import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button,  Stack, Typography } from "@mui/material";
import Header from "../Components/Header";
import axios from "axios";
import Swal from "sweetalert2";






export default function Student() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const filiere = data.get("filiere");
    const classe = data.get("classe");
    const moyg = data.get("moyg");
    const math = data.get("math");
    const phys = data.get("phys");
    const scie = data.get("scie");
    const choix = data.get("choix");
    const datedenaissance = data.get("datedenaissance");

    axios
      .post("http://localhost:5000/student", {
        classe,
        name,
        datedenaissance,
        moyg,
        filiere,
        math,
        phys,
        scie,
        choix,
      })
      .then((res) => {
        console.log(res.data);

        Swal.fire({
          title: "student created!",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box marginRight={"25px"}>

      <Header title="CREATE Student" subTitle="Create a New Student " />
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 4 }} direction={"row"}>
          <TextField sx={{ flex: 1 }}  label="filiere"  name="filiere"  id="filiere"  autoFocus />
          <TextField sx={{ flex: 1 }}  label="Classe"  name="classe"  id="classe"/>
          <TextField sx={{ flex: 1 }} label="Name" name="name" id="name" />
          <TextField sx={{ flex: 1 }} label="Date_de_naissance" name="datedenaissance" id="datedenaissance"
          />
        </Stack>
        <Typography>Moyenne générale</Typography>
        <Stack sx={{ gap: 4 }} direction={"row"}>
          <TextField sx={{ flex: 1 }} label="Moyenne générale" name="moyg" id="moyg" />
        </Stack>
        <Typography>Resultat</Typography>
        <Stack sx={{ gap: 4 }} direction={"row"}>
          <TextField sx={{ flex: 1 }} label="Mathématiques" name="math" id="math"  />
          <TextField sx={{ flex: 1 }} label="physique" name="phys" id="phys"  />
          <TextField sx={{ flex: 1 }} label="science" name="scie" id="scie"  />
          <TextField sx={{ flex: 1 }} label="CHOIX" name="choix" id="choix"  autoComplete="on" />
        </Stack>
        <Box>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="outlined"
          >
            Create Student
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
