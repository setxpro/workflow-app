import styled from 'styled-components';

import { BsInfoCircleFill } from 'react-icons/bs'
import { CgArrowsExchangeAltV } from 'react-icons/cg';

export const MoreInfoIcon = styled(BsInfoCircleFill)`
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
`;

export const OrdenationIcon = styled(CgArrowsExchangeAltV)`
    font-size: 1.3rem;
    color: #333;
`;
