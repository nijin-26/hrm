import { ChangeEvent, MouseEvent, ReactNode } from "react";
import { JsxElement } from "typescript";

export interface IContextAction {
  type: string;
  payload?: any;
}

export interface IButton {
  className?: string;
  type?: "button" | "submit" | "reset";
  btnType?: "primary" | "secondary" | "disabled";
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface IFilterOptions {
  departments: IDepartment[];
  roles: IRoles[];
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
  placeholder: string;
  listOfSkills: { id: string; name: string }[];
  searchInput: string;
  handleInput: (value: string) => void;
  handleSelectedSkills: (value: string) => void;
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

export interface IRoles {
  id: string;
  name: string;
}

export interface IDepartment {
  id: string;
  name: string;
}

export interface ITableViewProps {
  tableHeaders: ITableHeader[];
  tableData: TableDataType[];
  handleRowClick: (e: MouseEvent<HTMLElement>, id: string) => void;
  handleSort: (column: string) => void;
  loading: boolean;
}

export interface ITableHeader {
  id: string;
  name: string;
  isSortable: boolean;
}

export type TableDataType = IEmployeeDetails; // Union other type that the table could recieve

export interface IEmployeeDetails {
  id: string;
  userId?: string;
  fullName?: string;
  dateOfBirth?: number | string;
  dateOfJoin?: number | string;
  email?: string;
  password?: string;
  mobile?: string;
  workLocation?: string;
  imageURL?: string;
  department?: string;
  role?: string;
  skill: string[];
  actions?: JsxElement | ReactNode;
}

export interface IPaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}
