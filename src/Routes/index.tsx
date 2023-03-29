import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import { ChildrenJSX } from '../types/ChildrenTypes';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import Signin from '../pages/auth/signIn';
import Layout from '../components/Layout';
import BI from '../pages/BI';
import EditBi from '../pages/BI/EditBi';

const LockRouter = ( { children } : ChildrenJSX) => {

    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Signin/>
    }

    return children
}

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<LockRouter><Layout><Home/></Layout></LockRouter>}/>
        <Route path='/bi' element={<LockRouter><Layout><BI/></Layout></LockRouter>}/>
        <Route path='/bi/edit/:id' element={<LockRouter><Layout><EditBi/></Layout></LockRouter>}/>
        <Route path='/forget-pass' element={<div><h1>Esqueci minha senha....</h1></div>}/>
    </Routes>
  );
}

export default AppRoutes;