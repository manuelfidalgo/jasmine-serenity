import { Actor, Cast, TakeNotes } from "@serenity-js/core";
import { BrowseTheWeb } from "@serenity-js/webdriverio";

/* eslint-disable @typescript-eslint/naming-convention */
export const enum ACTOR {
    ADMIN = "admin",
}

export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        switch (actor.name) {
            case ACTOR.ADMIN:
                return actor.whoCan(
                    BrowseTheWeb.using(browser),
                    TakeNotes.usingASharedNotepad()
                );

            default:
                throw new Error(
                    `The actor called ${actor.name} is not one of the recognised personas. Use agent | admin`
                );
        }
    }
}
