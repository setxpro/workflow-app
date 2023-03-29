import { useContext } from "react";
import { WrapperSidebarContext } from "../contexts/Sidebar/WrapperSidebar";

export const useSidebar = () => {
  const sidebar = useContext(WrapperSidebarContext);
  return sidebar;
};
