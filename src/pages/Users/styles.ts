import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    tr {

        th {
            border: 0;
            :nth-child(1) {
                display: flex;
                align-items: center;
                gap: .5rem;

                img {
                    border-radius: 50%;
                }
            }

        }

        td {
            transition: .5s ease;
            color: ${props => props.theme.colors.text};
            font-size: 1.2em;
        }

        :nth-child(even) {
            transition: .5s ease;
            background: ${props => props.theme.colors.header};
        }
        :nth-child(odd) {
            transition: .5s ease;
            background: ${props => props.theme.colors.biHover};
        }
    }

    .css-1dydcym-MuiTableCell-root {
        border: 0;
    }

    .name-area {
        text-transform: capitalize;
    }
`;
export const ContentTitle = styled.div`
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: ${props => props.theme.colors.text};
        transition: .5s ease;
    }

    @media (max-width: 500px) {
        height: 20%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

`;
export const FieldInput = styled.input`
    width: 50%;
    padding: .8rem .5em;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.text};
    font-size: 1em;
    background: transparent;
    outline: none;

    @media (max-width: 500px) {
        width: 100%;
    }

`;
export const ContainerTable = styled.div`
    height: 90%;
    .css-og52vs-MuiTableCell-root.MuiTableCell-head {
        transition: .5s ease;
        background: ${props => props.theme.colors.text}; // Alter
        color: ${props => props.theme.colors.header}; // Alter
    }
    .css-1dydcym-MuiTableCell-root {
        transition: .5s ease;
        color: ${props => props.theme.colors.text};
    }

    .approved {
        color: ${props => props.theme.title === "light" ? 'green' : '#28C16D'};

        span {
            background: RGB(40, 193, 109, 0.3);
            padding: 0.5rem;
            border-radius: .5rem;
        }
    }
    .waiting {
        color: #f00;

        span {
            background: rgba(255, 100, 100, 0.3);
            padding: 0.5rem;
            border-radius: .5rem;
        }
       
    }
`;

export const ImageAvatar = styled.div<{isOnline: boolean}>`

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
`;