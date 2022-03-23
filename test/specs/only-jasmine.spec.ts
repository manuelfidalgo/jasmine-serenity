describe(`Only Jasmine Suite`, () => {
    beforeAll(async function () {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("hello!"), 10);
        });
        console.log(`Only Jasmine BeforeAll: ${result}`);
    });

    afterAll(async function () {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("bye!"), 10);
        });
        console.log(`Only Jasmine AfterAll: ${result}`);
    });

    it("Test #1", function () {
        console.log("Only Jasmine test #1");
    });

    it("Test #2", function () {
        console.log("Only Jasmine test #2");
    });
});
