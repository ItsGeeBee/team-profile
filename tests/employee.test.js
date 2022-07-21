const Employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });
  
  test("Can set name by using constructor", () => {
    const name = "Alice";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });