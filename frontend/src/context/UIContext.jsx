import {
  createContext,
  useContext,
  useState
} from "react";

const UIContext =
  createContext();

export const UIProvider = ({
  children
}) => {

  const [
    sidebarOpen,
    setSidebarOpen
  ] = useState(true);

  return (

    <UIContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen
      }}
    >
      {children}
    </UIContext.Provider>

  );
};

export const useUI = () =>
  useContext(UIContext);