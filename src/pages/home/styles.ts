import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 70px);
    width: 100%;

`;

export const ContentArea = styled.div`
    h1, h2 {
        color: ${props => props.theme.colors.text};
    }
    h1 {
        font-size: 4em;    
        font-weight: 500;
        text-transform: capitalize;
    }
    h2 {
        font-size: 2.5em;
        font-weight: 400;
    }
`;
