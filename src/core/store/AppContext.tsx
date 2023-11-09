import { ReactNode, createContext, useContext, useReducer } from "react";
import {
  IAppContext,
  IAppContextState,
} from "../interfaces/AppContextInterface";

import { IContextAction } from "../interfaces/Common";

const initialState: IAppContextState = {};

const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

function appReducer(
  state: IAppContextState,
  action: IContextAction
): IAppContextState {
  switch (action.type) {
    case "ADD_EMP":
      return state;
    default:
      return state;
  }
}

function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
