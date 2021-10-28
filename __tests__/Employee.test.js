const Employee = require("../lib/Employee");

describe("Employee", () => {
  test("should create a new Employee object", () => {
    const object = new Employee("john", 1, "john@gmail.com");
    expect(typeof object == "object");
  });

  test("should create an object with all paramaters", () => {
    const employee = new Employee("john", 1, "john@gmail.com");
    expect(employee.name === "john");
    expect(employee.id === 1);
    expect(employee.email === "john@gmail.com");
    expect(employee.github === "johnGithub");
  });

  test("should get the name using getName()", () => {
    const employee1 = new Employee("john", 1, "john@gmail.com");
    expect(employee1.getName() == employee1.name);
  });

  test("should get the id using getId()", () => {
    const employee2 = new Employee("john", 2, "john@gmail.com");
    expect(employee2.getId() == employee2.id);
  });

  test("should get the email using getEmail()", () => {
    const employee3 = new Employee("john", 3, "john@gmail.com");
    expect(employee3.getEmail() == employee3.email);
  });

  test("should get the Role using getRole()", () => {
    const employee4 = new Employee("john", 4, "john@gmail.com");
    expect(employee4.getRole() == employee4.role);
  });
});
