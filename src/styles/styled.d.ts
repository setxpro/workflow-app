import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      header: string;
      sidebar: string;
      text: string;
      tableText: string;
      modalH3: string;
      tableEven: string;
      biHover: string;
      thTable: string;
    };
  }
}
