import styled from "styled-components";

export const Container = styled.div<{wrapper: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  overflow: hidden;

  width: ${props => props.wrapper ? '50%' : '0'};

  transition: .5s ease;

  border-left: 2px solid #3333;

  display: flex;
  flex-direction: column;

  z-index: 100;

  transition: .5s ease;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};

  @media (max-width: 768px) {
    width: ${props => props.wrapper ? '90%' : '0'};
  }

  @media (max-width: 500px) {
    width: ${props => props.wrapper ? '100%' : '0'};
  }
`;

export const TitleArea = styled.div`
  height: 60px;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .MuiSvgIcon-root {
    cursor: pointer;
  }

  h2 {
    font-size: 2em;
    transition: .5s ease;
    color: ${props => props.theme.colors.text};
  }
`;
export const CurrentTopMenus = styled.div`
    height: 60px;

    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 500px) {
      height: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1px;
      flex-direction: column;
    }

    .active {
        color: #444ddd; // create theme
    }

    a {
        text-decoration: none;
        transition: .5s ease;
        color: ${props => props.theme.colors.text};
        white-space: nowrap; 
        border-bottom: 2px solid transparent;
    }
`;
export const ContentPages = styled.div`
  flex: 1;
`;
export const ContainerBlur = styled.div<{wrapper: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    cursor: pointer;

    background: rgba(0, 0, 0, 0.5);

    display: ${props => props.wrapper ? 'inline' : 'none' };

    z-index: 99;

`;
