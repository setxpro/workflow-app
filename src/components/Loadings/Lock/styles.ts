import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader-key {
    width: 64px;
    height: 44px;
    position: relative;
    border: 5px solid #053;
    border-radius: 8px;
  }
  .loader-key::before {
    content: "";
    position: absolute;
    border: 5px solid #053;
    width: 32px;
    height: 28px;
    border-radius: 50% 50% 0 0;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
  }
  .loader-key::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: cyan;
    box-shadow: 16px 0 cyan, -16px 0 cyan;
    animation: flash 0.5s ease-out infinite alternate;
  }

  @keyframes flash {
    0% {
      background-color: rgba(25, 255, 255, 0.2);
      box-shadow: 16px 0 rgba(25, 255, 255, 0.2), -16px 0 rgba(25, 255, 255);
    }
    50% {
      background-color: rgba(25, 255, 255);
      box-shadow: 16px 0 rgba(25, 255, 255, 0.2), -16px 0 rgba(25, 255, 255, 0.2);
    }
    100% {
      background-color: rgba(25, 255, 255, 0.2);
      box-shadow: 16px 0 rgba(25, 255, 255), -16px 0 rgba(25, 255, 255, 0.2);
    }
  }
`;
