import { ReactNode, createContext, useContext, useReducer } from "react";
import {
  IAppContext,
  IAppContextState,
} from "../interfaces/AppContextInterface";

import rootReducer from "./reducers";

const initialState: IAppContextState = {
  employees: [],
  filteredEmployees: [],
  skills: [],
  roles: [],
  departments: [],
  filterSort: {
    name: "",
    department: "",
    role: "",
    skills: [],
    sortBy: "fullName",
    sortOrder: "asc",
  },
};

const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
