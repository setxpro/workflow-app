import React, { useContext, memo } from "react";
import * as C from "./styles";
import { useSidebar } from "./../../hooks/useSidebar";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";

const Sidebar = () => {
  // Context to open sidebar
  const { wrapperSidebar, openSidebar } = useSidebar();

  // user is logged
  const { logout } = useContext(AuthContext);
  
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
            <Link to="/" onClick={wrapperSidebar} >Home</Link>
          </C.AreaLink>
         
          <C.AreaLink>
            <Link to="/users" onClick={wrapperSidebar} >Usuários</Link>{" "}
          </C.AreaLink>
           {/*
          <C.AreaLink>
            {" "}
            <Link to="#" onClick={wrapperSidebar} >Financeiro</Link>
          </C.AreaLink>
          <C.AreaLink>
            <Link to="#" onClick={wrapperSidebar} >Centro de custo</Link>{" "}
          </C.AreaLink>
          <C.AreaLink>
            <Link to="/" onClick={wrapperSidebar} >Contas a Pagar</Link>
          </C.AreaLink> */}
          <C.AreaLink>
            <Link to="/bi" onClick={wrapperSidebar} >BI</Link>
          </C.AreaLink>
          <C.AreaLink>
            <Link to="/" onClick={wrapperSidebar} >Suporte</Link>
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
