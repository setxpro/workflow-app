import * as React from "react";
import Button from "@mui/material/Button";
import * as C from "./styles";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { toast } from 'react-toastify';
import { AuthContext } from "../../contexts/auth";
import { GetThemeContext } from "../../contexts/Theme/GetThemeContext";
import { User } from "../../types/User";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    
  },

  '& .td': {
    display: "flex", 
    flexDirection: "row", 
    gap: "1rem", 
    alignItems: "center"
  }
}));


interface Props {
  userId: string;
}

const Users: React.FC = () => {

  const [users, setUsers] = React.useState<User[]>([])
  const [search, setSearch] = React.useState("")
  const navigate = useNavigate()
  const [onlineU, setOnlineU] = React.useState<Props[]>([])
  const { user } = React.useContext(AuthContext)
  const { theme } = React.useContext(GetThemeContext)

  React.useEffect(() => {

    (async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_APP_TALK}/user`, {
        headers: { Authorization: `Bearer ${user?.token}`}
      });
      setUsers(data.users);
    })()
  }, [])


  const handleRemoveUser = async (id: string, name:string) => {

    let confirm = window.confirm(`Deseja realmente excluir o usuário ${name}?`);

    if (confirm) {
      const { data } = await axios.delete(`${import.meta.env.VITE_APP_TALK}/user/delete-user/${id}`, {
        headers: { Authorization: `Bearer ${user?.token}`}
      })
      let remove = users.filter(i => i._id !== id);
      setUsers(remove);
      toast.success("Usuário excluído com sucesso!")
      return data;
    }

    toast.dark("Ação abortada com sucesso!")
  }



  const usersArr: any = [];

  onlineU.forEach(el => {
    if (el.userId !== null) {
      usersArr.push({
        id: el.userId
      })
    }

  })

  function compareIds(id: string) {

    for(let i = 0; i < usersArr.length; i++) {
      if (`${usersArr[i].id === id}`) {
        return true;
      }
      return false;
    }
  }


  let rows: any = [];

  users.forEach((el) => {
      rows.push({
        online: compareIds(el._id),
        id: el._id,
        firstName: el.name,
        middlename: el.middleName,
        assignments: el.assignments,
        role: el.role,
        login: el.login,
        email: el.email,
        phone: el.phone,
        isApproved: el.isApproved,
        avatar: el.avatar
      })
    })
    
    const filterRows: any = rows.filter((i:any) => i.firstName.startsWith(search))

  return (
    <C.Container>
      <C.ContentTitle>
        <C.FieldInput type="search" placeholder="Buscar usuário..." value={search} onChange={e => setSearch(e.target.value)}/>
      </C.ContentTitle>
      <C.ContainerTable>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Atuação</StyledTableCell>
            <StyledTableCell align="center">Cargo</StyledTableCell>
            <StyledTableCell align="center">Login</StyledTableCell>
            <StyledTableCell align="center">E-mail</StyledTableCell>
            <StyledTableCell align="center">Telefone</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {filterRows.map((row:any, index: number) => {
            if(row.role !== "Developer")
            return (
              <StyledTableRow key={index}>
                <StyledTableCell align="center" component="th" scope="row">
                  <C.ImageAvatar isOnline={row.online}>
                    <img  src={row.avatar} alt="avatar" />
                  </C.ImageAvatar>
                  <span className="name-area">{row.firstName}</span> <span className="name-area">{row.middlename}</span></StyledTableCell>
                <StyledTableCell align="center">{row.assignments}</StyledTableCell>
                <StyledTableCell align="center"
                style={{
                  color: `${
                    row.role === "Admin" 
                    ? `${theme.title === "dark" ? "rgb(0, 255, 200)" : "#444DDD"}`
                    : row.role === "Member" 
                    ? `${theme.title === "dark" ? "rgb(255, 102, 0)" : "#444DDD"}`
                    : row.role === "Owner" 
                    ?   `${theme.title === "dark" ? "rgb(30, 255, 0)" : "#444DDD"}`
                    : ""}`,
                    fontWeight: '700'
                }}>{row.role}</StyledTableCell>
                <StyledTableCell align="center">{row.login}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.phone}</StyledTableCell>
                <StyledTableCell align="center" className={row.isApproved ? 'approved' : 'waiting'}><span>{row.isApproved ? 'Aprovado' : 'Pendente'}</span></StyledTableCell>
                <StyledTableCell align="center">
                  <Button color="info" onClick={() => navigate(`/usuarios/update/${row.id}`)}><BorderColorIcon/></Button>
                  <Button  color="error" onClick={() => handleRemoveUser(row.id, `${row.firstName} ${row.middlename}`)}><RemoveCircleOutlineIcon/></Button>
                </StyledTableCell>
  
              </StyledTableRow>
            )
            return null;
          })}
        </TableBody>
      </Table>
    </TableContainer>
      </C.ContainerTable>
    </C.Container>
  );
};

export default Users;
