const Engineer = require("../lib/engineer");

describe ('engineer',() =>{
    it("Github generated via getGithub()", () => {
        const testGithub = 'ItsGeeBee';
        const engineer = new Engineer(testGithub);
        expect(engineer.getGithub()).toBe(testGithub);
      });
    });