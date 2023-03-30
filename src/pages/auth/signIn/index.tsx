import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as C from "./styles";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth";
import Lock from "../../../components/Loadings/Lock";

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, loading } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    let password = pass;

    if (!user) {
      setErrorUser(true);
      return toast.error("Por favor, insira ao menos um login!");
    }

    if (!password) {
      setErrorPass(true);
      return toast.error("Por favor, insira ao menos uma senha!");
    }

    if (user && pass) {

      let login = user;

      setErrorUser(false);
      setErrorPass(false);
      signIn(login, password);

      navigate("/");
    }
  };

  return (
    <C.Container>
      <C.ContainerLeft>
        <h1>BAGAGGIO</h1>
        <h4>Leve sempre com você.</h4>
      </C.ContainerLeft>
      <C.ContainerRight>
        <C.ContentFormTop>
          <img
            src="https://lojabagaggio.vtexassets.com/assets/vtex/assets-builder/lojabagaggio.store-theme/1.0.5/svg/bag-logo-default-desktop___d33d44145bda5472d416a1c8b3dcfef3.svg"
            alt="ico"
          />
        </C.ContentFormTop>
        {loading ? (
          <Lock/>
        ) : (
          <React.Fragment>
            <C.ContentFormMiddle>
              <form autoComplete="off">
                <div className={!errorUser ? "area-input" : "error"}>
                  <C.UserIcon />
                  <input
                    autoComplete="false"
                    type="text"
                    name="login"
                    placeholder="Usuário"
                    value={user}
                    onChange={(e) => [
                      setUser(e.target.value),
                      setErrorUser(false),
                    ]}
                  />
                </div>
                <div className={!errorPass ? "area-input" : "error"}>
                  <C.PassIcon />
                  <input
                    autoComplete="false"
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={pass}
                    onChange={(e) => [
                      setPass(e.target.value),
                      setErrorPass(false),
                    ]}
                  />
                </div>
              </form>
              <C.ContentButton>
                <button onClick={handleSubmit}>Fazer Login</button>
                <Link to="/forget-pass">Esqueci minha senha</Link>
                <Link to="/register-user">Solicitação de cadastro</Link>
              </C.ContentButton>
            </C.ContentFormMiddle>
            <C.ContentFormBottom>
              Created by <a href="https://github.com/setxpro.com" target="_blank" rel="noreferrer">Patrick Anjos</a> | © 2023{" "}
            </C.ContentFormBottom>
          </React.Fragment>
        )}
      </C.ContainerRight>
    </C.Container>
  );
};

export default Signin;
