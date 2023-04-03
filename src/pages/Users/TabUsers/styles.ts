import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  table {
    width: 100%;
    text-align: center;
    position: relative;

    thead {
      tr {
        th {
          transition: 0.5s ease;
          background: ${(props) => props.theme.colors.thTable};
          color: ${(props) =>
            props.theme.title === "light" ? "#EEE" : "#333"};
          padding: 0.3em;
            position: sticky;
            top: 0;
            z-index: 99;
        }
      }
    }

    tbody {
      tr {
        :nth-child(even) {
          transition: 0.5s ease;
          background: ${(props) => props.theme.colors.header};
        }
        :nth-child(odd) {
          transition: 0.5s ease;
          background: ${(props) => props.theme.colors.biHover};
        }

        .member {
            font-weight: bold;
            font-size: 1em;
            color: orange;

          }
          .admin {
            font-weight: bold;
            font-size: 1em;
            color: #444DDD;
          }
          .dev {
            font-weight: bold;
            font-size: 1em;
            color: CYAN;

          }
          .owner {
            font-weight: bold;
            font-size: 1em;
            color: rgba(100, 200, 100);
          }

        td {
          transition: 0.5s ease;
          color: ${(props) => props.theme.colors.text};
          padding: 0.5em;

          .approved {
            color: ${(props) =>
              props.theme.title === "light" ? "green" : "#28C16D"};

            span {
              background: RGB(40, 193, 109, 0.3);
              padding: 0.5rem;
              border-radius: 0.5rem;
            }
          }
          .waiting {
            color: #f00;

            span {
              background: rgba(255, 100, 100, 0.3);
              padding: 0.5rem;
              border-radius: 0.5rem;
            }
          }

          #btn {
            color: #eee;
          }
        }
      }
    }
  }
`;
export const ContentTitle = styled.div`
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme.colors.text};
    transition: 0.5s ease;
  }

  @media (max-width: 500px) {
    height: 20%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const FieldInput = styled.input`
  width: 50%;
  padding: 0.8rem 0.5em;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  font-size: 1em;
  background: transparent;
  outline: none;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const ContainerTable = styled.div`
  height: calc(100vh - 250px);
  overflow-y: scroll;
  
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track {background: #5555;}
  ::-webkit-scrollbar-thumb { background: #555; }

  .approved {
    color: ${(props) => (props.theme.title === "light" ? "green" : "#28C16D")};

    span {
      background: RGB(40, 193, 109, 0.3);
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
  .waiting {
    color: #f00;

    span {
      background: rgba(255, 100, 100, 0.3);
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
`;
