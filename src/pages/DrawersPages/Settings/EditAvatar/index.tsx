import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";

import * as C from "./styles";

const EditAvatar: React.FC = () => {
  const [image, setImage] = React.useState<File | null>(null);
  const [foundImage, setFoundImage] = React.useState("");
  const inputFileRef = React.useRef<HTMLInputElement | null>(null);
  const [imageSelected, setImageSelected] = React.useState("");

  React.useEffect(() => {
    if (image) {
      readB64Img(image, (base64) => setImageSelected(`${base64}`))
    }
  }, [image])

  const convertImage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (image) {
      readB64Img(image, (base64) => setAvatarInLocalStorage(`${base64}`))
      // return window.location.reload();
    }
  }

  function readB64Img(file: File, cb: (prop: string | ArrayBuffer | null) => void) {
    var reader = new FileReader();

    reader.onloadend = (e) => {
      cb(reader.result);
    };

    reader.readAsDataURL(file);
    // Convert to base64
  }

  React.useEffect(() => {
    const isAvatar = localStorage.getItem("avatar");
    if (isAvatar) {
      const foundedAvatar = JSON.parse(isAvatar);
      setFoundImage(foundedAvatar);
    }
  }, [])

  const setAvatarInLocalStorage = (avatar: string) => {
    let avatarDb = localStorage.setItem('avatar', JSON.stringify(avatar));
    return avatarDb;
  }
  
  return (
    <C.View>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Atualizar Avatar
            </Typography>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", alignItems: "center", gap: "2rem" }}
              >
                 {
            imageSelected 
            ? 
              <img src={imageSelected} alt="avatar" className={image ? 'select-image' : ''}/> 
            : 
            foundImage
            ?
              <img src={foundImage} alt="avatar" className={image ? 'select-image' : ''}/> 
            :
            <div className={image ? 'select-image' : 'image-not-found'}><p>Insira uma imagem</p></div>}

                <div className="area-upload">
                  <MoveToInboxIcon className="btn-upload" />
                  <input
              ref={inputFileRef}
              type="file"
              name="logo"
              accept="image/*"
              onChange={e => {
                let files = e.target.files;
                if (files?.length) {
                  setImage(files[0])
                }
              }} />
                </div>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" color="success" sx={{ mt: 3, ml: 1 }} onClick={convertImage}>
                Atualizar
              </Button>
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </C.View>
  );
};

export default EditAvatar;
