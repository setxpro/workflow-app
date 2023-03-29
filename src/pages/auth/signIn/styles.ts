import styled from "styled-components";

import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: #053;

  @media (max-width: 885px) {
    width: 100%;
  }

  display: flex;
`;

export const ContainerLeft = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 885px) {
    flex: 1;
  }
  @media (max-width: 834px) {
    display: none;
  }

  h1 {
    color: #ffff;
    font-size: 7em;
    font-weight: 400;

    @media (max-width: 885px) {
      font-size: 4em;
      padding: 0 10px;
    }
  }
  h4 {
    color: #ffff;
    font-size: 2em;
    font-weight: 400;

    @media (max-width: 885px) {
      font-size: 1em;
      padding: 0 10px;
    }
  }
`;

export const ContainerRight = styled.div`
  flex: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  gap: 1rem;

  @media (max-width: 885px) {
    flex: 2;
  }
`;

export const ContentFormTop = styled.div`
  flex: 0.1;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentFormMiddle = styled.div`
  flex: 2;
  width: 100%;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

      .error {
        width: 100%;
        border-radius: 8px;
        border: 1px solid #f00;

        display: flex;
        align-items: center;
        gap: 3px;

        input {
          width: inherit;
          font-size: 1.3em;
          padding: 0.5rem 0;
          outline: none;
          border: none;
          color: #f00;
        }
      }

    .area-input {
      width: 100%;
      border-radius: 8px;
      border: 1px solid #5555;

      display: flex;
      align-items: center;
      gap: 3px;
      input {
        width: inherit;
        font-size: 1.3em;
        padding: 0.5rem 0;
        outline: none;
        border: none;
        color: #333;

        @media (min-width: 320px) AND (max-width: 428px) {
          font-size: 2em;
          padding: 1rem 0;
        }
      }

      button {
        padding: 0.5rem;
        width: 200px;
      }
    }
  }
`;
export const ContentButton = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  button {
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    width: 200px;
    background: #053;
    color: #fff;
    font-size: 1.2em;
    cursor: pointer;

    @media (min-width: 320px) AND (max-width: 428px) {
      width: 100%;
      padding: 1rem 0
    }

  }
`;
export const ContentFormBottom = styled.div`
  flex: 0.1;
`;
export const ContentMessageError = styled.div`
  height: 50px;
  width: 100%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    color: red;
  }
`;

export const UserIcon = styled(BiUser)`
  color: #333;
  font-size: 1.8em;

  @media (min-width: 320px) AND (max-width: 428px) {
    font-size: 2em;
  }
`;
export const PassIcon = styled(AiOutlineLock)`
  color: #333;
  font-size: 1.8em;

  @media (min-width: 320px) AND (max-width: 428px) {
    font-size: 2em;
  }
`;
