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

export interface ISkills {
  id: string;
  name: string;
}

export interface IEmployeeDetails {
  id: string;
  fullName: string;
  email: string;
  date: number;
}
