"use strict"

console.log("-".repeat(20))
let shopping = "    Apfel, Pfirsich, +++Avocado, Mango   "
console.log(shopping)

// Bei einer Einkaufsliste haben sich ein paar Fehler
// eingeschlichen. Unsere Texterkennung des Scans hat ein 
// paar Leerzeichen zu viel erkannt, sowie ein paar 
// Plus-Zeichen eingelesen, die im Original gar nicht 
// existieren. Das möchten wir korrigieren!


// Aufgabe 1: Entferne die Leerzeichen links und rechts, und
// schreibe das Ergebnis zurück in die Variable "shopping"
console.log("-".repeat(20))
shopping = shopping.trim()
console.log(shopping)

// Aufgabe 2: Finde die Position der drei Plus-Zeichen, und
// speichere diese in einer Variablen
console.log("-".repeat(20))
let pluses = shopping.indexOf("+++")
console.log("Position der Plusse: " + pluses)

// Aufgabe 3: Schneide die 3 Plus-Zeichen aus und gebe das 
// Ergebnis mit einem console.log aus.
// Verwende dazu einmal die .substr()-Funktion, und einmal
// die .slice()-Funktion
console.log("-".repeat(20))
console.log(shopping.substr(0, pluses) + shopping.substr(pluses + 3))
console.log(shopping.slice(0, pluses) + shopping.slice(pluses + 3))


// Es soll ausgegeben werden: "Apfel, Pfirsich, Avocado, Mango"
// Tipp: Du wirst hierzu 2 Aufrufe der jeweiligen Funktionen 
// benötigen - einmal bis hin zu den +++-Zeichen, und einmal
// für das Stück danach!

// Aufgabe 4: Schneide die 3 Plus-Zeichen aus. Verwende dazu
// die .replace()-Funktion!
console.log(shopping.replace("+++", ""))


// Aufgabe 5: Jetzt soll die Shopping-Liste ausgegeben werden.
// Wandle die Liste in folgendes Schreibweise um. Platziere
// auch die 2 Striche über / unter der Auflistung, und verwende
// dazu die .repeat()-Funktion!
// 

shopping = shopping.replace("+++", "")

console.log("-".repeat(20))
console.log("Einkaufsliste:")


let shoppingText = shopping
  .replace(", ", "\n - ")
  .replace(", ", "\n - ")
  .replace(", ", "\n - ")

console.log(" - " + shoppingText)

console.log("-".repeat(20))
