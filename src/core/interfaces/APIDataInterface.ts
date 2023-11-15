interface Employee {
  fullName: string;
  dateOfBirth: number;
  dateOfJoin: number;
  email: string;
  mobile: string;
  workLocation: string;
  imageURL: string;
  department: string;
  role: string;
  skill: string[];
}

interface Department {
  [key: string]: {
    name: string;
  };
}

interface Role {
  [key: string]: {
    name: string;
  };
}

interface Skill {
  [key: string]: {
    name: string;
  };
}

export interface FirebaseData {
  employee: {
    [key: string]: Employee;
  };
  department: Department;
  role: Role;
  skill: Skill;
}
