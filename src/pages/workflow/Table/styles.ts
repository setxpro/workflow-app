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
    #search,
    #firstName,
    #lastName,
    #email,
    #assignment,
    #phone {
        color: ${props => props.theme.colors.text};
    }

    #dark {
        color: #333;
    }
    #light {
        color: #FFF;
    }

    .MuiFormLabel-root {
        color: rgba(100, 100 ,100);
    }
    
    .MuiInputBase-root {
        border-bottom: none;
    }

    .iHJkia .MuiButtonBase-root {
        color: ${props => props.theme.colors.text};
    }

    h1 {
        color: ${props => props.theme.colors.text};
        font-weight: 400;
    }
`;