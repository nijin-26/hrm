import { Dispatch } from "react";

export interface IAppContextState {}

export interface IAppContext {
  state: IAppContextState;
  dispatch: Dispatch<any>;
}

export interface IContextAction {
  type: string;
  payload?: any;
}
