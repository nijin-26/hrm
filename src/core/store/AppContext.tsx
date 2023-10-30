import { ReactNode, createContext, useContext, useReducer } from "react";

const initialState = {};

const AppContext = createContext(initialState);

export function useAppContext() {
  return useContext(AppContext);
}

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD":
      return state;
    default:
      return state;
  }
};

function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
