import styled from "styled-components";

export const Container = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader-thin {
    border: 8px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25)
      rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
  }

  @keyframes animloader {
    0% {
      border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25)
        rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75);
    }
    33% {
      border-color: rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15)
        rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35);
    }
    66% {
      border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75)
        rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25);
    }
    100% {
      border-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35)
        rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15);
    }
  }
`;
