const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

describe ('manager',() =>{
it("Can set office number by using constructor", () => {
    const testID = 100;
    const manager = new Manager("Foo", 1, "test@test.com", testID);
    expect(manager.officeNumber).toBe(testID);
  });
  
it('getRole() should return "Manager"', () => {
    const testRole = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testRole);
  });
  
it("office number generated via getOffice()", () => {
    const testOffice = 100;
    const e = new Manager("Foo", 1, "test@test.com", testOffice);
    expect(e.getOfficeNumber()).toBe(testOffice);
  });
});