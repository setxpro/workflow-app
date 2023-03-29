import { ChildrenNode } from "../../types/ChildrenTypes";
import * as C from "./styles";

const Template = ({ children }: ChildrenNode) => {
  return <C.Container>{children}</C.Container>;
};

export default Template;
