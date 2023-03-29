import { WrapperSidebarProvider } from "../../contexts/Sidebar/WrapperSidebar";
import { ChildrenNode } from "../../types/ChildrenTypes";
import SideRightSettings from "../Drawers/Right";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Template from "../Template";
import * as C from "./styles";

const Layout = ({ children }: ChildrenNode) => {
  return (
    <C.Container>
      <WrapperSidebarProvider>
        <Sidebar />
        <Template>
          <Header />
          {/* <AprovedExpenseProvider> */}
          <C.ContentPages>{children}</C.ContentPages>
          {/* </AprovedExpenseProvider> */}
          <SideRightSettings/>
        </Template>
      </WrapperSidebarProvider>
    </C.Container>
  );
};

export default Layout;
