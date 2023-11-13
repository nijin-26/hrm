import { Dispatch } from "react";
import { IDepartment, IEmployeeDetails, IRoles, ISkills } from "./Common";

export interface IFilterSortReducer {
  name: string;
  department: string;
  role: string;
  skills: ISkills[];
  sortBy: string;
  sortOrder: string;
}

export interface IAppContextState {
  employees: IEmployeeDetails[];
  filteredEmployees: IEmployeeDetails[];
  skills: ISkills[];
  roles: IRoles[];
  departments: IDepartment[];
  filterSort: IFilterSortReducer;
}

export interface IAppContext {
  state: IAppContextState;
  dispatch: Dispatch<any>;
}
