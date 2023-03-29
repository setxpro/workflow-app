import React, { memo } from 'react';

import * as C from './styles'
import { BiProps } from '../../../types/BiTypes';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';

interface Props {
    data: BiProps[]
}

const CardBi: React.FC<Props> = ({ data }) => {

    const { user } = useContext(AuthContext)

  return (
    <React.Fragment>
        {data.map((bi, index) => {

            const findBiByIdUser = bi.members.includes(`${user?.login}`)
            
            if (findBiByIdUser) 
            return  (
                <C.Container
                key={index}
                href={bi.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{bi.title}</h2>
                </C.Container>
            )

            return null;
        })}
    </React.Fragment>
  );
}

export default memo(CardBi);