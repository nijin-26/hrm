import { ReactNode } from "react";

export interface IButton {
  type?: "button" | "submit" | "reset";
  btnType: "primary" | "secondary";
  children: ReactNode;
  handleBtnClick?: () => void;
}

export interface IModal {
  isOpen: boolean;
  handleModalClose: () => void;
  children: ReactNode;
}

export interface IFilterSelect {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}

export interface ISearchSkills {
  placeholder: string;
  listOfSkills: { id: string; name: string }[];
  selectedSkills: { id: string; name: string }[];
  handleSelectedSkills: (value: string) => void;
  removeSelectedSkill: (value: string) => void;
}

export interface ISkills {
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
