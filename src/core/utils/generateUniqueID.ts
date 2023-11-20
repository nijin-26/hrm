import { IEmployeeDetails } from "../interfaces/Common";

// * Generate a 4 digit ID for new employee

export const generateUniqueKey = (employees: IEmployeeDetails[]): string => {
  const key = Math.floor(1000 + Math.random() * 9000).toString();
  const idExist = employees.some((employee) => employee.id === key);

  if (idExist) return generateUniqueKey(employees);
  else return key;
};
