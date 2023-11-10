import { ReactNode, createContext, useContext, useReducer } from "react";
import {
  IAppContext,
  IContextAction,
  IContextState,
} from "../interfaces/interfaces";

const initialState: IContextState = {
  theme: localStorage.getItem("theme") || "light",
};

const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

// Define the reducer function
function appReducer(
  state: IContextState,
  action: IContextAction
): IContextState {
  switch (action.type) {
    case "TOGGLE_THEME":
      if (state.theme === "light") {
        localStorage.setItem("theme", "dark");
        return { ...state, theme: "dark" };
      } else {
        localStorage.setItem("theme", "light");
        return { ...state, theme: "light" };
      }
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
