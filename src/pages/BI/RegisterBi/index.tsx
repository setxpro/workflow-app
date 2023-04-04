import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { toast } from "react-toastify";
import axios from "axios";
import { ContainerArea } from "./styles";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function RegisterBi({setValue}: Props) {

  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  const [member, setMember] = React.useState("")
  const [members, setMembers] = React.useState<string[]>([]);

  
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_APP_TALK}/bi/create`, {
        title,
        link,
        members: members
      })
      setTitle("")
      setLink("")
      
      if (!data.status) {
       return toast.error(data.message);

      }

      toast.success(data.message);

      setValue(0);     
      return data;

    } catch (error: any) {
       return toast.error(error.response.data.message)
    }
   
  }

  function addMembers() {
    setMembers([...members, member])
    setMember("")
  }

  const handleInputKeyUp = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | any
  ) => {
    if (e.keyCode === 13) {
      addMembers()
    }
  };

  function removeItemsSelected(index: string) {
    const remove = members.filter((mm) => mm !== index);
    setMembers(remove);
  }

  return (
    <Container component="main"  sx={{ mb: 4}}>
     <ContainerArea>
     <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, flex: 1 }}
      >
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Cadastrar BI
          </Typography>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="title"
                name="title"
                label="Título"
                fullWidth
                variant="standard"
                onKeyUp={handleInputKeyUp}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="link"
                name="link"
                label="URL de acesso"
                fullWidth
                onKeyUp={handleInputKeyUp}
                variant="standard"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Grid>
           
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button id="light" variant="contained" color="success" sx={{ mt: 3, ml: 1 }} onClick={handleSubmit}>
              Registrar BI
            </Button>
          </Box>
        </React.Fragment>
      </Paper>

      <Paper variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, flex: 1  }}>
         <Typography variant="h6" gutterBottom>
            Usuários
          </Typography>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
              <TextField
                id="search"
                name="title"
                type="search"
                label="Login"
                fullWidth
                variant="standard"
                value={member}
                onChange={(e) => setMember(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button id="light" variant="contained" color="secondary" sx={{ mt: 3, ml: 1 }} onClick={addMembers}>Add</Button>
            </Grid>
            </Grid>
          <Grid container spacing={3}p={5}>
          {members.map((user) => (
            <Grid sm={12} sx={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <h3 style={{
                color: '#999',
                fontWeight: '400',
                fontSize: '1em',
              }}>{user}</h3><Button variant="contained" color="error" onClick={() => removeItemsSelected(user)}>Remover</Button>
            </Grid>
          ))}
          </Grid>
      </Paper>
     </ContainerArea>
    </Container>
  );
}
