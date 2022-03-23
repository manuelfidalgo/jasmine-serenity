This repo has 2 tests:
- jasmine-serenity.spec.ts: tests with Serenity+wdio+Jasmine.
    They have a problem: when you include an await block in the beforeAll: test #2 does not get executed and neither ``Log.the("Serenity afterAll: bye!")``.
- only-jasmine.spec.ts: tests without Serenity (wdio+Jasmine). I added an await block in the beforeAll to be similar to Serenity tests: Looks like everything works fine (test #2 gets executed)

To run the example...
``run npm ci`` to download dependencies
``npm run test-serenity`` to run both tests with serenity config

Also, wdio.conf.ts is included to run tests without configuring Serenity in wdio file


