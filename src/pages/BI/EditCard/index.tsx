import React, { memo } from 'react';

import * as C from './styles'
import { BiProps } from '../../../types/BiTypes';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';

interface Props {
    data: BiProps[]
}

const EditCardBi: React.FC<Props> = ({ data }) => {

    const { user } = useContext(AuthContext)

  return (
    <React.Fragment>
        {data.map((bi, index) => {


            if (user?.role === "Developer" || user?.role === "Admin") 

            return  (
                <C.Container
                to={`/bi/edit/${bi._id}`}
                key={index}
              >
                <h2>{bi.title}</h2>
                </C.Container>
            )

            return null;
        })}
    </React.Fragment>
  );
}

export default memo(EditCardBi);