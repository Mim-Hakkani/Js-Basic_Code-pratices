class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  }
  
  class Employee extends Person {
    constructor(firstName, lastName, age, jobTitle, salary) {
      super(firstName, lastName, age);
      this.jobTitle = jobTitle;
      this.salary = salary;
    }
  
    getJobTitle() {
      return this.jobTitle;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Create an Employee instance
  const employee = new Employee('John', 'Doe', 30, 'Software Engineer', 80000);
  

//   where using abstraction here Person class properties  is hide in this employee 

  console.log(employee.getFullName()); // output: "John Doe"  
  console.log(employee.getAge()); // output: 30


 // usied in employee method 
  console.log(employee.getJobTitle()); // output: "Software Engineer"
  console.log(employee.getSalary()); // output: 80000

  // directly used abstract class property 
  console.log('age is :: ',employee.age); // age is 30
  