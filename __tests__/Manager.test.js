const Manager = require("../lib/Manager");

describe("Manager", () => {
  test("should create a new Manager object", () => {
    const object = new Manager("john", 1, "john@gmail.com", "johnOfficeNumber");
    expect(typeof object == "object");
  });

  test("should create an object with all paramaters", () => {
    const manager = new Manager(
      "john",
      1,
      "john@gmail.com",
      "johnOfficeNumber"
    );
    expect(manager.name === "john");
    expect(manager.id === 1);
    expect(manager.email === "john@gmail.com");
    expect(manager.officeNumber === "johnOfficeNumber");
  });

  test("should get role using getRole()", () => {
    const manager1 = new Manager(
      "john",
      1,
      "john@gmail.com",
      "johnOfficeNumber"
    );
    expect(manager1.getRole() == "Manager");
  });

  test("should get officeNumber using getofficeNumber()", () => {
    const manager2 = new Manager(
      "john",
      1,
      "john@gmail.com",
      "johnOfficeNumber"
    );
    expect(manager2.getofficeNumber() == manager2.officeNumber);
  });
});
