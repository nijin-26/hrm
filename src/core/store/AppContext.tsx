import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  IAppContext,
  IAppContextState,
} from "../interfaces/AppContextInterface";

import rootReducer from "./reducers";
import { getEmployeeData } from "../api";
import actionTypes from "./actionTypes";

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
  loading: false,
  state: initialState,
  dispatch: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

function AppContextProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getEmployeeData("/.json");
        if (response && response.employee) {
          setLoading(false);
          dispatch({
            type: actionTypes.SET_ALL_DATA,
            payload: response,
          });
          dispatch({ type: actionTypes.FILTER_SORT_EMPLOYEES });
        } else console.log("Response not found");
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ loading, state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
