"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs")
const launches = JSON.parse(
  fs.readFileSync("spacex/launches.json", {encoding: "utf-8"})
)

console.log("Anzahl launches:", launches.length)

// Aufgaben:
// 
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
let launchedRockets = []
let successfullyLaunches = 0
let failedLaunches = 0

for (const launch of launches) {
    if (parseInt(launch["launch_year"]) === 2018) launchedRockets.push(launch["flight_number"])

    if (launchedRockets.includes(launch["flight_number"])) {
        if (launch["launch_success"] === true) successfullyLaunches++;
        if (launch["launch_success"] === false) failedLaunches++;
    }


}

console.log("launchedRockets", launchedRockets)
console.log("successfullyLaunches", successfullyLaunches)
console.log("failedLaunches", failedLaunches)
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
// 
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
// 
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht! 
//
// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
let payloadMass = 0
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!


for (const launch of launches) {
        for (const i of launchedRockets) {
            if (launchedRockets.includes(launch["flight_number"])) {
                for (const payload of launch["rocket"]["second_stage"]["payloads"]) {
                    payloadMass += payload["payload_mass_kg"]
                }

            }

        }
}

console.log("payloadMass", payloadMass, "kg")

/*1) Startvorgänge im Jahr 2018: 21
1a) Erfolgreiche Startvorgänge im Jahr 2018: 21
1b) Nicht Erfolgreiche Startvorgänge im Jahr 2018: 0
Im Jahr 2018 wurden 89844.85kg in den Weltraum befördert*/
