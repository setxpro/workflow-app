import { createContext, useContext, ReactNode, useState, useEffect } from "react";

// Guardar os valores de cada link para determinada dendenização

interface Props {
  getValue: (text: string) => void;
  infoNavigate: string;
}

export const TogglePageContext = createContext({} as Props);

const TogglePageProvider = ({ children }: { children: ReactNode }) => {
  const [infoNavigate, setInfoNabvigate] = useState("");

  // function to render page
  function getValue(text: string) {
    setInfoPage(text);
    return setInfoNabvigate(text);
  }

  // Set info by localstorage
  function setInfoPage(text: string) {
    const storageDb = localStorage.setItem("page", JSON.stringify(text))
    return storageDb;
  }

  // Get info by localStorage
  useEffect(() => {
    const isPageInStorageDb = localStorage.getItem("page");

    if(isPageInStorageDb) {
      const foundPage = JSON.parse(isPageInStorageDb);
      setInfoNabvigate(foundPage);
    }

  }, [])


  return (
    <TogglePageContext.Provider value={{ infoNavigate, getValue }}>
      {children}
    </TogglePageContext.Provider>
  );
};

export default TogglePageProvider;

export const useTogglePage = () => {
  const togglePage = useContext(TogglePageContext);
  return togglePage;
};
