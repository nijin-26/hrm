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
  auth: { user: any };
  employees: IEmployeeDetails[];
  filteredEmployees: IEmployeeDetails[];
  skills: ISkills[];
  roles: IRoles[];
  departments: IDepartment[];
  filterSort: IFilterSortReducer;
}

export interface IAppContext {
  loading: boolean;
  state: IAppContextState;
  dispatch: Dispatch<any>;
}
