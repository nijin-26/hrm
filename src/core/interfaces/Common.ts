import { ChangeEvent, MouseEvent, ReactNode } from "react";
import { JsxElement } from "typescript";

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
  placeholder: string;
  name: string;
  options: { id: string; name: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ISearchSkills {
  position: "inside" | "outside";
  placeholder: string;
  listOfSkills: { id: string; name: string }[];
  selectedSkills: { id: string; name: string }[];
  searchInput: string;
  handleInput: (value: string) => void;
  handleSelectedSkills: (value: string) => void;
  removeSelectedSkill: (value: string) => void;
}

export interface IImageUpload {
  src: string | undefined;
  handleImageInput: (e: ChangeEvent) => void;
  removeSelectedImage: () => void;
}

export interface ISkills {
  id: string;
  name: string;
}

export interface ITableViewProps<T, U> {
  tableHeaders: T[];
  tableData: U[];
  handleRowClick: (e: MouseEvent<HTMLElement>, id: string) => void;
  handleSort: (column: string) => void;
}

export interface ITableHeader {
  id: string;
  name: string;
  isSortable: boolean;
}

export interface IEmployeeDetails {
  id: string;
  fullName?: string;
  dateOfBirth?: number | string;
  dateOfJoin?: number | string;
  email?: string;
  mobile?: string;
  workLocation?: string;
  imageURL?: string;
  department?: string;
  role?: string;
  skill?: string[];
  actions?: JsxElement | ReactNode;
}
