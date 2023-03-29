import styled from 'styled-components';

export const Container = styled.div`
    
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
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }

`;
