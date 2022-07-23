const Intern = require("../lib/intern");

describe ('intern',() =>{
    it("School generated via getSchool()", () => {
        const testSchool = 'Hogwarts';
        const intern = new Intern ('Brown', 1, 'test@test.com',testSchool);
        expect(intern.getSchool()).toBe(testSchool);
      });
    });