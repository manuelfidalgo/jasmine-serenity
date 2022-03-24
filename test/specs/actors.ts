import { Actor, Cast, TakeNotes } from '@serenity-js/core'
import { BrowseTheWeb } from '@serenity-js/webdriverio'

/* eslint-disable @typescript-eslint/naming-convention */
export const enum ACTOR {
  CAN_BROWSE = 'can_browse',
  CANNOT_BROWSE = 'cant_browse',
}

export class Actors implements Cast {
  prepare(actor: Actor): Actor {
    switch (actor.name) {
      case ACTOR.CAN_BROWSE:
        return actor.whoCan(
          BrowseTheWeb.using(browser),
          TakeNotes.usingASharedNotepad()
        )

      case ACTOR.CANNOT_BROWSE:
        return actor.whoCan(TakeNotes.usingASharedNotepad())

      default:
        throw new Error(
          `The actor called ${actor.name} is not one of the recognised personas.`
        )
    }
  }
}
