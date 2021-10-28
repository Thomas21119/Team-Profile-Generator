const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test("should create a new engineer object", () => {
    const object = new Engineer("john", 1, "john@gmail.com", "johnGithub");
    expect(typeof object == "object");
  });

  test("should create an object with all paramaters", () => {
    const engineer = new Engineer("john", 1, "john@gmail.com", "johnGithub");
    expect(Engineer.name === "john");
    expect(Engineer.id === 1);
    expect(Engineer.email === "john@gmail.com");
    expect(Engineer.github === "johnGithub");
  });

  test("should get role using getRole()", () => {
    const engineer1 = new Engineer("john", 1, "john@gmail.com", "johnGithub");
    expect(engineer1.getRole() == "Engineer");
  });

  test("should get Github using getGithub()", () => {
    const engineer2 = new Engineer("john", 1, "john@gmail.com", "johnGithub");
    expect(engineer2.getGithub() == engineer2.github);
  });
});
