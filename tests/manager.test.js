const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number by using constructor", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("office number generated via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });