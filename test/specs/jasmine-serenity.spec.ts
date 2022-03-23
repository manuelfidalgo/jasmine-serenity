import { actorCalled, Log } from "@serenity-js/core";
import { ACTOR } from "./actors";

describe(`My Serenity Suite`, () => {
    beforeAll(async function () {
        console.log("Serenity beforeAll start");
        //unless we remove this await, test #2 and afterAll will never be executed
        await actorCalled(ACTOR.ADMIN).attemptsTo(Log.the(`Serenity BeforeAll: Hello`));
        console.log("Serenity beforeAll end");
    });

    afterAll(async function () {
        console.log("Serenity afterAll");
        await actorCalled(ACTOR.ADMIN).attemptsTo(
            Log.the("Serenity afterAll: bye!")
        );
    });

    it("Test #1", function () {
        console.log("Serenity test #1");
    });

    it("Test #2", function () {
        console.log("Serenity test #2");
    });
});
