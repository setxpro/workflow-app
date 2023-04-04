import styled from 'styled-components';

export const Container = styled.a`
    display: grid;
    place-items: center;
    padding:  40px 5px;
    box-shadow: 1px 2px 3px #555;
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
        transition: all .5s ease;
        color: ${props => props.theme.colors.text};

    }

    &:hover {
        transition: all .5s ease;
        background: ${props => props.theme.colors.biHover};
    }
`;
