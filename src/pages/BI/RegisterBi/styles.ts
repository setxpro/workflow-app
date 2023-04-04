import styled from 'styled-components';

export const ContainerArea = styled.div`
    width: 100%;

    display: flex;
    gap: 1rem;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 0;
    }
`;
