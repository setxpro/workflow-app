import styled from "styled-components";

export const Container = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader-modal-top {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    background: #444ddd;
    box-sizing: border-box;
    animation: shadowExpandX 2s linear infinite alternate;
  }

  @keyframes shadowExpandX {
    0% {
      box-shadow: 0 0, 0 0;
      color: rgba(25, 255, 255, 0.2);
    }
    100% {
      box-shadow: -24px 0, 24px 0;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
