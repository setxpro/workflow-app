import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [name, setName] = React.useState("");
  const [middleName, setMiddlename] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [assignments, setAssignments] = React.useState("");
  const [role, setRole] = React.useState("");
  const [load, setLoad] = React.useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
        const { data } = await axios.post(`${import.meta.env.VITE_APP_TALK}/user/create`, {
            name,
            middleName,
            email,
            phone,
            assignments,
            role
        })
        toast.success(data.message)
        setName("")
        setMiddlename("")
        setEmail("")
        setPhone("")
        setAssignments("")
        setRole("")
        setLoad(false);
        return data;
    } catch (error: any) {
        toast.error(error.response.data.message)
    }
   
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            {load ? 'Criar usuário' : 'Usuário cadastrado com sucesso!'}
          </Typography>
          {load ?  <>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Nome"
                fullWidth
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Sobrenome"
                fullWidth
                variant="standard"
                value={middleName}
                onChange={(e) => setMiddlename(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="E-mail"
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="assignment"
                name="assignment"
                label="Setor | Loja"
                fullWidth
                variant="standard"
                value={assignments}
                onChange={(e) => setAssignments(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Telefone"
                fullWidth
                variant="standard"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Cargo"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <MenuItem value={"Developer"}>Developer</MenuItem>
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"Owner"}>Owner</MenuItem>
                    <MenuItem value={"Member"}>Member</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button id="light" variant="contained" color="success" sx={{ mt: 3, ml: 1, color: "#FFF" }} onClick={handleSubmit}>
              Cadastrar
            </Button>
          </Box>
          </> : <Button variant="contained" color="info" sx={{ mt: 3, ml: 1 }} onClick={() => setLoad(true)}>Cadastrar novo usuário</Button>}
        </React.Fragment>
      </Paper>
    </Container>
  );
}
