import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: grid;
    place-items: center;
    padding:  40px 5px;
    box-shadow: 1px 2px 5px #555;
    border-radius: 8px; 

    transition: all 0.5s ease;
    border-left: 5px solid cyan;

    text-decoration: none;
    color: ${props => props.theme.colors.text};

    h2 {
        font-weight: 400;

        @media (max-width: 500px) {
            font-size: 1.8em;
        }

        color: ${props => props.theme.colors.text};

    }

    &:hover {
        background: ${props => props.theme.colors.biHover};
    }
`;
