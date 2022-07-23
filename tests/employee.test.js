const Employee = require("../lib/employee");

describe('employee',() =>{
  it("Should instantiate employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });
  
it("Sets employee name", () => {
    const name = "Grace";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

it("Sets employee id", () => {
    const testID = 100;
    const employee = new Employee("Brown", testID);
    expect(employee.id).toBe(testID);
  });
  
it("Can set email via constructor argument", () => {
    const testEmail = "test@test.com";
    const employee = new Employee("Brown", 1, testEmail);
    expect(employee.email).toBe(testEmail);
  });
  
it("Can get name via getName()", () => {
    const testName = "Grace";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
  });
  
it("Can get id via getId()", () => {
    const testID = 100;
    const employee = new Employee("Brown", testID);
    expect(employee.getId()).toBe(testID);
  });
  
it("Can get email via getEmail()", () => {
    const testEmail = "test@test.com";
    const employee = new Employee("Brown", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
  });
  
it("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Alice", 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
  });
});