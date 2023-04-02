import React, { useContext, memo } from "react";
import * as C from "./styles";
import { useSidebar } from "./../../hooks/useSidebar";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";
import SidebarReducer from "../../reducers/SidebarReducer";

const Sidebar = () => {
  // Context to open sidebar
  const { wrapperSidebar, openSidebar } = useSidebar();
  const { dispatch, state } = SidebarReducer();

  // user is logged
  const { logout, user } = useContext(AuthContext);

  // Cod Aprovadores
  let userAprov = ["001512", "000590"];

  const findApprov = userAprov.includes(`${user?.codAprov}`);

  function WrapperSidebarAndToggleReducer(type: string) {
    dispatch({ type: type });
    wrapperSidebar();
  }

  return (
    <React.Fragment>
      <C.Container openSidebar={openSidebar}>
        <C.SidebarTopArea>
          <div></div>
          <h1>WORKFLOW</h1>
          <C.CloseIcon onClick={wrapperSidebar} />
        </C.SidebarTopArea>
        <C.SidebarMiddleArea>
          <C.AreaLink>
            <Link to="/" onClick={() => WrapperSidebarAndToggleReducer("Home")} className={state.Home ? 'active' : ''}>
              Home
            </Link>
          </C.AreaLink>
          {user?.role !== "Member" && (
            <C.AreaLink>
              <Link
                to="/users"
                onClick={() => WrapperSidebarAndToggleReducer("Users")} className={state.Users ? 'active' : ''}
              >
                Usuários
              </Link>{" "}
            </C.AreaLink>
          )}

          {user?.codAprov === "001512" && (
            <C.AreaLink>
              {" "}
              <Link
                to="/aprov-desp"
                onClick={() => WrapperSidebarAndToggleReducer("Fiscal")} className={state.Fiscal ? 'active' : ''}
              >
                Fiscal
              </Link>
            </C.AreaLink>
          )}

          {user?.codAprov === "000590" && (
            <C.AreaLink>
              {" "}
              <Link
                to="/aprov-desp"
                onClick={() => WrapperSidebarAndToggleReducer("Financeiro")} className={state.Financeiro ? 'active' : ''}
              >
                Financeiro
              </Link>
            </C.AreaLink>
          )}

          {!findApprov && (
            <C.AreaLink>
              {" "}
              <Link
                to="/aprov-desp"
                onClick={() => WrapperSidebarAndToggleReducer("CC")} className={state.CC ? 'active' : ''}
              >
                CC
              </Link>
            </C.AreaLink>
          )}
          <C.AreaLink>
            <Link to="/bi" onClick={() => WrapperSidebarAndToggleReducer("BI")} className={state.BI ? 'active' : ''}>
              BI
            </Link>
          </C.AreaLink>
          <C.AreaLink>
            <Link
              to="/dito"
              onClick={() => WrapperSidebarAndToggleReducer("Dito")} className={state.Dito ? 'active' : ''}
            >
              Dito
            </Link>
          </C.AreaLink>
          <C.AreaLink>
            <Link
              to="/"
              onClick={() => WrapperSidebarAndToggleReducer("Support")} className={state.Support ? 'active' : ''}
            >
              Suporte
            </Link>
          </C.AreaLink>
        </C.SidebarMiddleArea>
        <C.SidebarBottomArea>
          <C.OffIcon onClick={logout} />
        </C.SidebarBottomArea>
      </C.Container>
      <C.ContentBlur
        onClick={wrapperSidebar}
        openSidebar={openSidebar}
      ></C.ContentBlur>
    </React.Fragment>
  );
};

export default memo(Sidebar);
