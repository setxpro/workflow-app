import * as React from "react";
import Button from "@mui/material/Button";
import * as C from "./styles";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/auth";
import { User } from "../../../types/User";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

interface Props {
  userId: string;
}

const TabUsers: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [search, setSearch] = React.useState("");
  const { user } = React.useContext(AuthContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_TALK}/user`,
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );
      setUsers(data.users);
    })();
  }, []);

  const handleRemoveUser = async (id: string, name: string) => {
    let confirm = window.confirm(`Deseja realmente excluir o usuário ${name}?`);

    if (confirm) {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_APP_TALK}/user/delete-user/${id}`,
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );
      let remove = users.filter((i) => i._id !== id);
      setUsers(remove);
      toast.success("Usuário excluído com sucesso!");
      return data;
    }

    toast.dark("Ação abortada com sucesso!");
  };

  // const filterRows: any = users.filter((i:any) => i.firstName.startsWith(search))

  return (
    <C.Container>
      <C.ContentTitle>
        <C.FieldInput
          type="search"
          placeholder="Buscar usuário..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </C.ContentTitle>
      <C.ContainerTable>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Login</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Status</th>
              <th colSpan={3}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td>
                  {user.name} {user.middleName}
                </td>
                <td
                  className={
                    user.role === "Member"
                      ? "member"
                      : user.role === "Admin"
                      ? "admin"
                      : user.role === "Developer"
                      ? "dev"
                      : user.role === "Owner"
                      ? "owner"
                      : ""
                  }
                >
                  {user.role}
                </td>
                <td>{user.login}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className={user.isApproved ? "approved" : "waiting"}>
                  <span>{user.isApproved ? "Aprovado" : "Pendente"}</span>
                </td>
                <td>
                  <Button variant="contained" color="secondary" id="btn">
                    <MoreVertIcon />
                  </Button>
                </td>
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    id="btn"
                    onClick={() => navigate(`/usuarios/update/${user._id}`)}
                  >
                    <BorderColorIcon />
                  </Button>
                </td>
                <td>
                  <Button
                    variant="contained"
                    color="error"
                    id="btn"
                    onClick={() =>
                      handleRemoveUser(
                        user._id,
                        `${user.name} ${user.middleName}`
                      )
                    }
                  >
                    <RemoveCircleOutlineIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </C.ContainerTable>
    </C.Container>
  );
};

export default TabUsers;
