import { type } from "os";
import { Dispatch, ReactNode } from "react";

export interface IContextState {
  theme: "light" | "dark" | string;
}

export interface IAppContext {
  state: IContextState;
  dispatch: Dispatch<any>;
}

export interface IContextAction {
  type: string;
  payload?: any;
}
export interface IButton {
  className?: string;
  type?: "button" | "submit" | "reset";
  btnType?: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => void;
}

export interface IFilterOptions {
  handleToggleFilter: () => void;
}

export interface IModal {
  isOpen: boolean;
  handleModalClose: () => void;
  children: ReactNode;
}

export interface IFilterSelect {
  options: { id: string; name: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ISearchSkills {
  placeholder: string;
  listOfSkills: { id: string; name: string }[];
  selectedSkills: { id: string; name: string }[];
  handleSelectedSkills: (value: string) => void;
  removeSelectedSkill: (value: string) => void;
}

export interface IImageUpload {
  src?: string;
  value?: string;
  onChange?: () => void;
}

export interface ISkills {
  id: string;
  name: string;
}

export interface ITableViewProps<T, U> {
  tableHeaders: T[];
  tableData: U[];
}

export interface ITableHeader {
  id: string;
  name: string;
}

export interface IEmployeeDetails {
  id: string;
  fullName?: string;
  dateOfBirth?: number;
  dateOfJoin?: number;
  email?: string;
  mobile?: string;
  workLocation?: string;
  imageURL?: string;
  department?: string;
  role?: string;
  skill?: string[];
  [key: string]: any;
}
