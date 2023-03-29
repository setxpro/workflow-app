import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import * as C from "./styles";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BiProps } from "../../../types/BiTypes";
import { toast } from "react-toastify";

const EditBi: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate()

  const [item, setItem] = useState<BiProps>();
  const [members, setMembers] = useState<any[]>([]);

  const [member, setMember] = React.useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_TALK}/bi/find-one/${id}`
      );
      setItem(data.bi);
      setMembers(data.bi.members);
    })();
  }, [id]);

  function addMembers() {
    if (!member) return toast.error("Insira ao menos um login");
    setMembers([...members, member]);
    setMember("");
  }

  async function submitToServer() {

    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_APP_TALK}/bi/update-one/${id}`, {
        members,
       })
   
       toast.success(data.message)
       navigate('/bi')
       window.location.reload()
       return data;
    } catch (error:any) {
      toast.error(error.response.data.message)
    }
  }

  const removeItem = (index: string) => {
    const remove = members.filter((mm) => mm !== index);
    setMembers(remove);
  };

  return (
    <C.Container>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 3 }, margin: ".5rem", borderRadius: "8px" }}
      >
        <React.Fragment>
         
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" gutterBottom>
                {item?.title}
              </Typography>
            </Grid>

            <Grid item xs={6} sm={6}>
              <TextField
                required
                id="login"
                name="title"
                label="Login"
                fullWidth
                variant="standard"
                value={member}
                onChange={(e) => setMember(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 1, ml: 1 }}
                onClick={addMembers}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ mt: 1, ml: 1 }}
                onClick={submitToServer}
              >
                Registrar
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} sx={{width: "100%"}}>
            <Typography variant="h6" gutterBottom>
           Usuários
          </Typography>
            <C.Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td>{member}</td>
                    <td><C.Btn
                   onClick={() => removeItem(member)}
                 >
                  X
                 </C.Btn></td>
                  </tr>
                ))}
              </tbody>
            </C.Table>
            </Grid>
          </Grid>
        </React.Fragment>
      </Paper>
    </C.Container>
  );
};

export default EditBi;
