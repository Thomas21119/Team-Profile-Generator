const Intern = require("../lib/Intern");

describe("Intern", () => {
  test("should create a new Intern object", () => {
    const object = new Intern("john", 1, "john@gmail.com", "johnSchool");
    expect(typeof object == "object");
  });

  test("should create an object with all paramaters", () => {
    const intern = new Intern("john", 1, "john@gmail.com", "johnSchool");
    expect(intern.name === "john");
    expect(intern.id === 1);
    expect(intern.email === "john@gmail.com");
    expect(intern.school === "johnSchool");
  });

  test("should get role using getRole()", () => {
    const intern1 = new Intern("john", 1, "john@gmail.com", "johnSchool");
    expect(intern1.getRole() == "Intern");
  });

  test("should get School using getSchool()", () => {
    const Intern2 = new Intern("john", 1, "john@gmail.com", "johnSchool");
    expect(Intern2.getSchool() == Intern2.school);
  });
});
