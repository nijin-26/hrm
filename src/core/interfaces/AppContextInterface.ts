import { Dispatch } from "react";
import { IEmployeeDetails, ISkills } from "./Common";

export interface IAppContextState {
  employees: IEmployeeDetails[];
  skills: ISkills[];
  roles: string[];
  department: string[];
}

export interface IAppContext {
  state: IAppContextState;
  dispatch: Dispatch<any>;
}
