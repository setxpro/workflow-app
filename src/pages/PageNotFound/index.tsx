import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound: React.FC = () => {

    const navigate = useNavigate()

    return (
    <div 
        style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <button onClick={() => navigate(-1)}>Voltar</button>
        <h1>Página não encontrada</h1>
    </div>
  );
}

export default PageNotFound;