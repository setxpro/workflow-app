import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .right-side {
    display: flex;
    align-items: center;
    gap: 1rem;

    select {
      padding: 0.5rem;
      outline: none;
      cursor: pointer;
    }
  }
`;
export const TableContainer = styled.div`
  width: 100%;
  height: calc(100vh - 260px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #5555;
  }
  ::-webkit-scrollbar-thumb {
    background: #555;
  }

  table {
    width: inherit;
    background: transition;
    text-align: center;
    position: relative;

    color: ${(props) => props.theme.colors.text};

    thead {
      tr {
        th {
          background: ${(props) => props.theme.colors.sidebar};
          color: #fff;
          position: sticky;
          top: 0;
          z-index: 9;
          padding: 0.3rem;
        }
      }
    }
    tbody {
      tr {
        &:nth-child(even) {
          background: #5555;
        }

        td {
          padding: 0.3rem;
          white-space: nowrap;

          a {
            color: #444ddd;
            font-weight: 400;
            font-size: 1.2em;
          }
        }
      }
    }
  }
`;
export const ContentTitle = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme.colors.text};
  }
`;
