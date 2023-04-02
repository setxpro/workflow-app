import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

export const Container = styled.div<{ openSidebar: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  transition: 0.5s ease;
  z-index: 9999;
  overflow: hidden;
  background: ${(props) => props.theme.colors.sidebar};
  width: ${(props) => (props.openSidebar ? "19%" : "0px")};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 450px) {
    width: ${(props) => (props.openSidebar ? "50%" : "0px")};
  }
  @media (min-width: 834px) AND (max-width:  1024px) {
    width: ${(props) => (props.openSidebar ? "25%" : "0px")};
  }
  @media (min-width: 768px) AND (max-width: 834px) {
    width: ${(props) => (props.openSidebar ? "350px" : "0px")};
  }
  @media (min-width: 2800px) AND (max-width: 3000px) {
    width: ${(props) => (props.openSidebar ? "450px" : "0px")};
  }
`;
export const ContentBlur = styled.div<{ openSidebar: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.openSidebar ? "inline" : "none")};

  z-index: 99;
`;
export const SidebarTopArea = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  h1 {
    white-space: nowrap;
    color: #fff;
    font-weight: 400;
    font-size: 1.5em;
  }

  border-bottom: 1px solid #888;
`;

export const CloseIcon = styled(MdClose)`
  font-size: 2em;
  cursor: pointer;
  transition: 0.5s ease;
  color: #fff;
  white-space: nowrap;
`;
export const OffIcon = styled(AiOutlinePoweroff)`
  font-size: 2em;
  cursor: pointer;
  transition: 0.5s ease;
  color: #fff;
  white-space: nowrap;
`;
export const SpaceIcon = styled(GoPrimitiveDot)`
  font-size: 1em;
  cursor: pointer;
  transition: 0.5s ease;
  color: #fff;
  overflow: hidden;
`;

export const SidebarMiddleArea = styled.div`
  height: calc(100% - (70px + 70px));
  border-bottom: 1px solid #888;
`;

export const SidebarBottomArea = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0 10px;
`;
export const AreaLink = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  padding: 0 0px 0 0;
  transition: 0.5s ease;

  &:hover {
  }
  
  .active {
    background: #7777;
  }

  a {
    width: 100%;
    padding: 0.5rem;
    color: #ffff;
    font-size: 1.2em;
    white-space: nowrap;
    text-decoration: none;

    display: flex;
    gap: 1rem;

    .hidden {
      
    }

    @media (min-width: 320px) AND (max-width: 428px) {
      padding: 1rem;
      font-size: 1.5em;
    }

    @media (min-width: 768px) AND (max-width: 834px) {
      padding: 1rem;
      font-size: 1.5em;
    }
  }

  span {
    width: auto;
    height: 20px;
    border-radius: 25%;
    padding: 2px 3px;
    white-space: nowrap;
    color: #fff;
  }
`;
export const ContentDropOne = styled.div<{
  countItems: number;
  openDrop1: boolean;
}>`
  height: ${(props) =>
    props.openDrop1
      ? props.countItems
        ? `calc(${props.countItems} * 32.5px)px`
        : "0px"
      : "0px"};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
  width: 100%;

  a {
    width: inherit;
    color: #ffff;
    font-size: 1.2em;
    white-space: nowrap;
    text-transform: capitalize;

    @media (min-width: 320px) AND (max-width: 428px) {
      padding: 1rem;
      font-size: 1.5em;
    }

    @media (min-width: 768px) AND (max-width: 834px) {
      padding: 1rem;
      font-size: 1.5em;
    }
  }
  span {
    height: 20px;
    white-space: nowrap;
    color: cyan;
  }
  
`;
export const ContentDropCC = styled.div<{  countItems: number;  openDropCC: boolean; }>`
  width: 100%;
  height: ${(props) =>
    props.openDropCC
      ? props.countItems
        ? `calc(${props.countItems} * 32.5px)px`
        : "0px"
      : "0px"};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  padding: 0 10px 0 0;
  transition: 0.5s ease;

  background: red;

  a {
    width: 100%;
    padding: 0.5rem 1rem;
    color: #ffff;
    font-size: 1.2em;
    white-space: nowrap;
    text-transform: capitalize;

    @media (min-width: 320px) AND (max-width: 428px) {
      padding: 1rem;
      font-size: 1.5em;
    }

    @media (min-width: 768px) AND (max-width: 834px) {
      padding: 1rem;
      font-size: 1.5em;
    }
  }

  span {
    width: auto;
    height: 20px;
    background: rgba(0, 0, 255, 0.36);
    border-radius: 25%;
    padding: 2px 3px;
    white-space: nowrap;
    color: #fff;
  }
`;
