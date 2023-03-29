import { createContext, useState } from "react";
import { SidebarType } from "../../types/SidebarTypes";
import { ChildrenNode } from "../../types/ChildrenTypes";

export const WrapperSidebarContext = createContext({} as SidebarType);

export const WrapperSidebarProvider = ({ children }: ChildrenNode) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const wrapperSidebar = () => setOpenSidebar(!openSidebar);
  const wrapperSettings = () => setOpenSettings(!openSettings);

  return (
    <WrapperSidebarContext.Provider value={{ openSidebar, wrapperSidebar, wrapperSettings, openSettings }}>
      {children}
    </WrapperSidebarContext.Provider>
  );
};
