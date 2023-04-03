import { useReducer } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "Home":
      return {
        ...state,
        Home: true,
        Users: false,
        Fiscal: false,
        Financeiro: false,
        Dito: false,
        BI: false,
        Support: false,
        CC: false
      };
    case "Users":
      return {
        ...state,
        Home: false,
        Users: true,
        Fiscal: false,
        Financeiro: false,
        Dito: false,
        BI: false,
        Support: false,
        CC: false
      };
    case "Fiscal":
      return {
        ...state,
        Home: false,
        Users: false,
        Fiscal: true,
        Financeiro: false,
        Dito: false,
        BI: false,
        Support: false,
        CC: false
      };
    case "Financeiro":
      return {
        ...state,
        Home: false,
        Users: false,
        Fiscal: false,
        Financeiro: true,
        Dito: false,
        BI: false,
        Support: false,
        CC: false
      };
    case "Dito":
      return {
        ...state,
        Home: false,
        Users: false,
        Fiscal: false,
        Financeiro: false,
        Dito: true,
        BI: false,
        Support: false,
        CC: false
      };
    case "BI":
      return {
        ...state,
        Home: false,
        Users: false,
        Fiscal: false,
        Financeiro: false,
        Dito: false,
        BI: true,
        Support: false,
        CC: false
      };
    case "Support":
      return {
        ...state,
        Home: false,
        Users: false,
        Fiscal: false,
        Financeiro: false,
        Dito: false,
        BI: false,
        Support: true,
        CC: false
      };
    case "CC":
      return {
        ...state,
        Home: false,
        Users: false,
        Fiscal: false,
        Financeiro: false,
        Dito: false,
        BI: false,
        Support: false,
        CC: true
      };
  }
};

const SidebarReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    Home: true,
    Users: false,
    Fiscal: false,
    CC: false,
    Financeiro: false,
    Dito: false,
    BI: false,
    Support: false,
  });

  return { state, dispatch };
};

export default SidebarReducer;
