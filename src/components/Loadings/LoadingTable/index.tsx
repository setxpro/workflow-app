import React from 'react';

import { Container } from './styles';

const LoadingTable: React.FC = () => {
  return (
    <Container>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Container>
  );
}

export default LoadingTable;