import styled from "styled-components";

export const Container = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  .loader-modal-middle {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #444ddd;
    box-shadow: 13px 0 #444ddd, -13px 0 #444ddd;
    position: relative;
    animation: flash 0.5s ease-out infinite alternate;
  }

  @keyframes flash {
    0% {
      background-color: #444ddd;
      box-shadow: 13px 0 #fff2, -13px 0 #444ddd;
    }
    50% {
      background-color: #444ddd;
      box-shadow: 13px 0 #fff2, -13px 0 #fff2;
    }
    100% {
      background-color: #fff2;
      box-shadow: 13px 0 #444ddd, -13px 0 #fff2;
    }
  }
`;
