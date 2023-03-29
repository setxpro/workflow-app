import styled from "styled-components";

export const Container = styled.div`
  transition: 0.5s ease;
  background: ${(props) => props.theme.colors.background};

    .MuiPaper-root {
        transition: .5s ease;
        background: ${props => props.theme.colors.header};

        h6 {
            transition: .5s ease;
            color: ${props => props.theme.colors.text};
        }
    }

    .light {
        color: #333;
    }
    .dark {
        color: #FFF;
    }

    .light-btn {
        background: #4444;
        width: 100px;
        display: flex;
        align-items: center;
        padding: 0.5rem;
        gap: 10px;
        color: #333;
        border-radius: 10px;

        cursor: pointer;
    }
    .dark-btn {
        background: #8888;
        width: 100px;
        display: flex;
        padding: 0.5rem;
        align-items: center;
        gap: 10px;
        color: #FFF;
        border-radius: 10px;

        cursor: pointer;
    }

    .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root {
        transition: .5s ease;
        color: ${props => props.theme.colors.text}
    }

    .MuiInputBase-root { 
        border-bottom: 1px solid #FFF;
    }
    .MuiFormLabel-root {
        transition: .5s ease;
        color: #555;
    }

    #firstName,
    #lastName,
    #email,
    #assignment,
    #phone {
        transition: .5s ease;
        color: ${props => props.theme.colors.text};

    }


    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root  {

        color: ${props => props.theme.colors.text};
        border-radius: 0;

    }
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root  {
        color: ${props => props.theme.colors.text};
    }
    
`;

export const ContentPages = styled.div`
  transition: 0.5s ease;
  background: ${(props) => props.theme.colors.background};
`;
