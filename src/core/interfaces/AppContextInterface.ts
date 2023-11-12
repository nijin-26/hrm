import { Dispatch } from "react";
import { IEmployeeDetails, ISkills } from "./Common";

export interface IFilterReducer {
  name: string;
  department: string;
  role: string;
  skills: ISkills[];
}

export interface IAppContextState {
  employees: IEmployeeDetails[];
  filteredEmployees: IEmployeeDetails[];
  skills: ISkills[];
  roles: string[];
  department: string[];
  filter: IFilterReducer;
}

export interface IAppContext {
  state: IAppContextState;
  dispatch: Dispatch<any>;
}
