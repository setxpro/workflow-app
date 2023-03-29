import styled from 'styled-components';

export const Container = styled.div`
    h4 {
        color: ${props => props.theme.colors.text};
    }
    h6 {
        font-weight: 300;
    }

    #login {
        color: ${props => props.theme.colors.text};
    }
`;
export const Btn = styled.button`
    background: #d32f2f;
    color: #FFF;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 30%;
    cursor: pointer;
`;

export const Table = styled.table`
    width: 40%;

    thead {
        tr {

            th {
                padding: 0.5em;
                background: #555;
            }
        }
    }
    tbody {
        
        tr {

            td {

                text-align: center;
                padding: 0.5em;
                color: ${props => props.theme.colors.text};
                font-size: 1.3em;
            }

            &:nth-child(even) {
                background: #5555;
            }
        }
    }
`;
