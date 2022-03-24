import { ConsoleReporter } from "@serenity-js/console-reporter";
import { ArtifactArchiver } from "@serenity-js/core";
import { SerenityBDDReporter } from "@serenity-js/serenity-bdd";
import {
    Photographer,
    TakePhotosOfInteractions,
    WebdriverIOConfig,
} from "@serenity-js/webdriverio";
import { Actors } from "./test/specs/actors";
import fs = require("fs");

export const config: WebdriverIOConfig = {
    //automationProtocol: 'devtools',
    // =========================
    // Serenity/JS Configuration
    // =========================

    // Enable Serenity/JS framework adapter
    // see: https://serenity-js.org/modules/webdriverio/
    framework: "@serenity-js/webdriverio",
    jasmineOpts: {
        defaultTimeoutInterval: 360000,
    },

    serenity: {
        // Use custom Actors class
        // see: https://serenity-js.org/modules/core/class/src/stage/Cast.ts~Cast.html
        actors: new Actors(),

        runner: "jasmine",

        // Configure reporting services
        // see: https://serenity-js.org/handbook/reporting/
        crew: [
            ArtifactArchiver.storingArtifactsAt("./target/site/serenity"),
            Photographer.whoWill(TakePhotosOfInteractions), // slower execution, more comprehensive reports
            ConsoleReporter.forDarkTerminals(),
            new SerenityBDDReporter(),
        ],
    },

    specs: [
        //Example working
        ["./test/specs/working.spec.ts"],

        //Example failing
        ["./test/specs/failing.spec.ts"],

    ],

    maxInstances: 1,

    capabilities: [
        {
            // maxInstances can get overwritten per capability. So if you have an in-house Selenium
            // grid with only 5 firefox instances available you can make sure that not more than
            // 5 instances get started at a time.
            maxInstances: 1,
            //
            browserName: "chrome",
            acceptInsecureCerts: true,
            // If outputDir is provided WebdriverIO can capture driver session logs
            // it is possible to configure which logTypes to include/exclude.
            // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
            // excludeDriverLogs: ['bugreport', 'server'],

            "goog:chromeOptions": {
                args: [
                    "--disable-web-security",
                    "--allow-file-access-from-files",
                    "--allow-file-access",
                    "--disable-infobars",
                    "--no-sandbox",
                    "--disable-gpu",
                    "--window-size=1600,1200",
                ].concat(process.env.HEAD ? [] : ["--headless"]), // unless you prepend HEAD=true, tests will run headlessly
            },
        },
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "error",
    bail: 0,

    waitforTimeout: 20000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 10,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    // services: [
    //     ["selenium-standalone", { drivers: { chrome: "98.0.4758.102" } }],
    // ],

    // Native WebdriverIO reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ["spec"],
};
