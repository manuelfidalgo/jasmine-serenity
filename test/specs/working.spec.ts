import { actorCalled, Log } from '@serenity-js/core'
import { ACTOR } from './actors'

describe(`Suite working fine`, () => {
  beforeAll(async function () {
    //unless we remove this await, test #2 and afterAll will never be executed
    await actorCalled(ACTOR.CANNOT_BROWSE).attemptsTo(
      Log.the(`Serenity BeforeAll: Hello`)
    )
  })

  it('Test #1', function () {
    console.log('Serenity test #1')
  })

  it('Test #2', function () {
    console.log('Serenity test #2')
  })
})
