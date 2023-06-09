import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { ChildrenJSX } from "../types/ChildrenTypes";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import Signin from "../pages/auth/signIn";
import Layout from "../components/Layout";
import BI from "../pages/BI";
import EditBi from "../pages/BI/EditBi";
import PageNotFound from "../pages/PageNotFound";
import RootPageUsers from "../pages/RootPageUsers";
import UpdateUser from "../pages/Users/Update";
import Register from "../pages/Users/Register";
import Dito from "../pages/Dito";
import TableWorkflow from "../pages/workflow/Table";

const LockRouter = ({ children }: ChildrenJSX) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Signin />;
  }

  return children;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LockRouter>
            <Layout>
              <Home />
            </Layout>
          </LockRouter>
        }
      />
      <Route
        path="/login"
        element={<Signin/>}
      />
      <Route path="/register-user" element={<Register/>}/>
      <Route
        path="/bi"
        element={
          <LockRouter>
            <Layout>
              <BI />
            </Layout>
          </LockRouter>
        }
      />
      <Route
        path="/dito"
        element={
          <LockRouter>
            <Layout>
              <Dito />
            </Layout>
          </LockRouter>
        }
      />
      <Route
        path="/users"
        element={
          <LockRouter>
            <Layout>
              <RootPageUsers />
            </Layout>
          </LockRouter>
        }
      />
      <Route
        path="/usuarios/update/:id"
        element={
          <LockRouter>
            <Layout>
              <UpdateUser />
            </Layout>
          </LockRouter>
        }
      />
      <Route
        path="/bi/edit/:id"
        element={
          <LockRouter>
            <Layout>
              <EditBi />
            </Layout>
          </LockRouter>
        }
      />
      <Route
        path="/aprov-desp"
        element={
          <LockRouter>
            <Layout>
              <TableWorkflow />
            </Layout>
          </LockRouter>
        }
      />
      <Route
        path="/forget-pass"
        element={
          <div>
            <h1>Esqueci minha senha....</h1>
          </div>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
