interface Teacher {
  readonly firstName: string;
  readonly lastName: string; 
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [propName: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

//Extending the Teacher class

interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`
}


interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}
    
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
    
export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
    
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
    
  workOnHomework(): string {
    return "Currently working";
  }
    
  displayName(): string {
    return this.firstName;
  }
}
