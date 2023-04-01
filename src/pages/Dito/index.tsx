import React from 'react';

import * as C from './styles';

const Dito: React.FC = () => {
  return (
    <C.Container>
        <base target="_blank" />
        <iframe
        src="https://app.powerbi.com/view?r=eyJrIjoiOWVlNTA2OGQtNGQxNS00OTFhLWI3MGMtNjMyOTk4ZGZkZTRmIiwidCI6IjBjYjFjMmI3LTFhZTAtNDU5OC1hODQ1LWM2YWNiOTU3N2QzMSJ9">
        </iframe><br />
    </C.Container>
  );
}

export default Dito;