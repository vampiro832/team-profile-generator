const { default: inquirer } = require("inquirer")
const index = require("../index")


    describe("promptManager returns a string", () => {
        test("should use inquirer to prompt a string", () => {
            const { name, id, email } = index.promptManager(
                "abe",
                "834",
                "abe@gmail.com"
            )

            expect(name).toEqual("abe");
            expect(id).toEqual("834");
            expect(email).toEqual("abe@gmail.com")
        })
    })