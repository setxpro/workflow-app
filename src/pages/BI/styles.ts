import styled from 'styled-components';

export const Container = styled.div`
     margin-top: 20px;
    .MuiButtonBase-root {
        color: ${props => props.theme.colors.text};
    }

    .MuiTab-root.Mui-selected {
    color: #1976d2;
    }

    #title, 
    #link,
    #search {
        color: ${props => props.theme.colors.text};
    }

    #dark {
        color: #333;
    }
    #light {
        color: #FFF;
    }

    .MuiInputBase-root {
        border-bottom: none;
    }

`;

export const ContentCards = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    padding: 10px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

`;
