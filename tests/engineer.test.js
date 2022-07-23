const Engineer = require("../lib/engineer");

describe ('engineer',() =>{
    it("Github generated via getGithub()", () => {
        const testGithub = 'ItsGeeBee';
        const engineer = new Engineer('Brown', 1, 'test@test.com',testGithub);
        expect(engineer.getGithub()).toBe(testGithub);
      });
    });