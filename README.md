This repo has 2 suites (both with an async block in the beforeAll):
- failing.spec.ts: It uses actor with ``BrowseTheWeb`` ability. Problem: test #2 does NOT get executed 
- working.spec.ts: Almost the same code but the actor used does NOT have ``BrowseTheWeb`` ability. Test #2 is executed

To run the example...
``run npm ci`` to download dependencies
``npm run test-serenity`` to run both tests with serenity config

