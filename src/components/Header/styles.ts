import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";

export const Container = styled.div`
  height: 70px;
  transition: 0.5s ease;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  user-select: none;

  @media (max-width: 884px) {
    align-items: flex-start;
    border-bottom: 1px solid #5555;
    align-items: center;
  }
`;
export const ContentHeader = styled.div`
  width: 99%;
  height: 60px;
  transition: 0.5s ease;
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.text};
  border-radius: 1rem;

  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: -1px 2px 15px 4px rgba(0,0,0,0.36);

  @media (max-width: 884px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const LeftContentArea = styled.div`
  height: inherit !important;
  display: flex;
  align-items: center;
`;

export const RightContentArea = styled.div`
  height: inherit !important;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NotifyArea = styled.div<{openNotify: boolean}>`
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

        &::after {
            content: attr(data-count);
            width: auto;
            height: auto;
            border-radius: 30%;
            background: red;
            color: #FFF;
            position: absolute;
            top: 20px;
            right: 0px;

            padding: 0 3px;
        }

`;

export const AvatarNameArea = styled.div`
  display: flex;
  gap: 5px;
`;

export const NameArea = styled.div`
  h2,
  h3 {
    transition: 0.5s ease;
    color: ${(props) => props.theme.colors.text};
    text-align: end;

    text-transform: capitalize;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: #999;
  }
`;

export const AvatarImage = styled.div`
  cursor: pointer;
  position: relative;
  .image-area {
    
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      transition: 0.5s ease;
      border: 2px solid ${(props) => props.theme.colors.text};
      padding: 2px;

     

    }

    &::after {
        content: "▼";
        width: 10px;
        height: 10px;
        border-radius: 30%;
        position: absolute;
        bottom: 5px;
        right: 10px;
      }
  }
`;

/** ICONS
 *
 */

export const BarsIcon = styled(FaBars)`
  font-size: 2em;
  cursor: pointer;
  transition: 0.5s ease;
  color: ${(props) => props.theme.colors.text};
`;
export const BellIcon = styled(AiFillBell)`
  font-size: 2em;
  cursor: pointer;
  transition: 0.5s ease;
  color: ${(props) => props.theme.colors.text};
`;
export const LightIcon = styled(MdLightMode)`
  font-size: 2em;
  cursor: pointer;
  transition: 0.5s ease;
  color: ${(props) => props.theme.colors.text};
`;
export const DarkIcon = styled(MdNightlight)`
  font-size: 2em;
  cursor: pointer;
  transition: 0.5s ease;
  color: ${(props) => props.theme.colors.text};
`;

/** ICONS
 *
 */
