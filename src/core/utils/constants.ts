import { ITableHeader } from "../interfaces/Common";

export const employeeTableHeader: ITableHeader[] = [
  {
    id: "id",
    name: "ID",
    isSortable: false,
  },
  {
    id: "fullName",
    name: "Full Name",
    isSortable: true,
  },
  {
    id: "email",
    name: "Email",
    isSortable: true,
  },
  {
    id: "dateOfJoin",
    name: "Joined At",
    isSortable: true,
  },
  {
    id: "actions",
    name: "Actions",
    isSortable: false,
  },
];

export const workLocation = [
  { id: "Trivandrum", name: "Trivandrum" },
  { id: "Kochi", name: "Kochi" },
  { id: "Calicut", name: "Calicut" },
  { id: "Noida", name: "Noida" },
  { id: "Chennai", name: "Chennai" },
  { id: "Delhi", name: "Delhi" },
];
