"use strict"

// Aufgabe 1:
//
// Strafaufgabe für einen Schüler an der Sprachschule!
// Er soll 25x schreiben: "Ich soll im Unterricht nicht stören".
// 
// Schreibe ein kleines Programm, was dies für den Schüler 
// erledigt ;)

for (let i = 0; i <= 25; i++) {
  console.log(i, "Ich soll im Unterricht nicht stören")
}

console.log("\n", "-".repeat(60), "\n")


// Aufgabe 2: Sprachschule
//
// Ein Kurs ist zu groß geworden. Teile die Teilnehmer daher
// gleichmäßig in 2 Kurse auf!
//
// Sorge dafür, dass dein Code auch mit anderen Kursgrößen
// funktioniert!
//
// Hinweis: Hier gibt es verschiedene Lösungswege - solange
// der Kurs in 2 Kurse aufgeteilt wird, die ungefähr gleich 
// groß sind, ist deine Lösung richtig!
//
// Tipp: Modulo! %
let students = [
  "Max", 
  "Monika", 
  "Franziska", 
  "Bernd", 
  "Tobias",
  "Felix", 
  "Marcus",
  "Andreas"
]

let students1 = []
let students2 = []

for (let i = 0; i < students.length; i++) {
  
  if(i < students.length / 2) {
    students1.push(students[i])
  } else {
    students2.push(students[i])
  }
  
  if (students1.length + students2.length === students.length) {
    console.log("Teilnehmer des ersten Kurses:")
    for(let student of students1) {
      console.log("-", student)
    }

    console.log("Teilnehmer des zweiten Kurses:")
    for(let student of students2) {
      console.log("-", student)
    }
    break
  }

}

console.log("\n", "-".repeat(60), "\n")

// Aufgabe 3
// 
// Für eine Sprachschule soll ein Preisrechner entwickelt werden,
// der den Gesamtpreis bis hin zu einem bestimmten Level berechnet.
//
// Beispiel: Für das Level levels[0] = A1 beträgt der Preis exakt
// prices[0] = 400€.
//
// Für jeden Index kannst du also in der Variable "levels" nachschauen,
// wie dieses Level bezeichnt wird, und in der Variable "prices",
// wie viel dieses Kostet.
//
// Schreibe den Code für die folgenden Teilaufgaben möglichst universell,
// sodass wir z.B. ein Level A3 noch dazwischen schalten können, indem
// wir nur die Listen "levels" und "prices" anpassen!
// 
// a) Wie viel kostet es für einen Teilnehmer, die Sprache bis 
//    einschließlich des Levels "C1" zu lernen? Schreibe deinen Code so
//    universell, dass er auch mit anderen Level-Bezeichnungen / Preisen
//    zurecht käme.
//
// b) Wie viel kostet es, einen Teilnehmer von (einschließlich) A2 bis
//    einschließlich C1 zu bringen?
// 
// c) Ein Teilnehmer möchte (maximal) 1500€ in seine Sprachkenntnisse 
//    investieren. Bis zu welchem Level (bei A1 angefangen) können wir
//    ihn dafür unterrichten?

let levels = [
  "A1",
  "A2",
  "A3",
  "B1",
  "B2",
  "C1",
  "C2"
]

let prices = [
  400,
  500,
  523,
  550,
  600,
  650,
  700
]

let startLevel = "A1"
let level = "A2"
let price = 0
let budget = 1500

for (let i = 0; i <= levels.length; i++) {
  if (i <= levels.indexOf(level)) {
    price = price + prices[i]
  }

  if (levels[i] === level) {
    console.log("a)","Um den Kurs bis zum Level", level, "zu absolvieren, muss man", price, "€ zahlen.")
    break
  }
} 

price = 0

for (let i = 0; i <= levels.length; i++) {
  if (i <= levels.indexOf(level) && i >= levels.indexOf(startLevel)) {
    price = price + prices[i]
  }

  if (levels[i] === level) {
    console.log("b)","Um den Kurs von Level", startLevel, "bis zum Level", level, "zu absolvieren, muss man", price, "€ zahlen.")
    break
  }
} 

price = 0

for (let i = 0; i <= levels.length; i++) {
  

  let tooExpensive
  let nextPrice = 0

  if (tooExpensive = true) break
    while (nextPrice < budget) {
      nextPrice = price + prices[i]
  console.log(nextPrice)
  price = price + prices[i]
     
  if (nextPrice > budget) {
    console.log("c)","Mit dem Budget", budget, "kann man den Sprachkurs bis zum Level", levels[i], "absolvieren.")
      console.log(price)
      break 
  }
    }
      


}

console.log("\n", "-".repeat(60), "\n")

// Aufgabe 4
//
// Unsere Sprachschule wächst dank unserer Hilfe immer weiter.
// Inzwischen sollen weitere Kurse hinzugefügt werden, und unser
// Code soll darauf vorbereitet werden.
// 
// Die Teilnehmer werden ja pro Kurs gespeichert. Bisher hatten
// wir dafür immer separate Variablen verwendet.
//
// Hier in dem Beispiel wäre das in der Schreibweise von vorher,
// students1 wäre der erste Kurs, students2 der Zweite:
//  >> let students1 = ["Max", "Monika"]
//  >> let students2 = ["Erik", "Erika"]
//
// Damit die Sprachschule wachsen kann, wird die Struktur in eine
// verschachtelte Liste umgestellt. Dadurch kann später ein 3. 
// Kurs hinzugefügt werden:
let courses = [
  ["Max", "Monika"], // Erster Kurs
  ["Kevin", "Junus"],
  ["Erik", "Erika"] // Zweiter Kurs
]
// Aufgaben:
// 
//  a) Berechne die Anzahl der Teilnehmer in allen Kursen zusammen!

let totalStudents = 0

for (let i = 0; i < courses.length; i++) {

  for (let student of courses[i]) {
    totalStudents++;
  }

}

console.log("Derzeit werden", totalStudents, "Schüler an der Sprachschule unterrichtet.")

//  b) Der Teilnehmer "Max" musste seinen Sprachkurs absagen. Schreibe
//     ein Programm, was ihn aus seinem Kurs entfernt. Dieses Programm
//     soll auch in der Lage sein, z.B. "Erika" aus ihrem entsprechenden
//     Kurs entfernen zu können.
// 
//     Sorge auch dafür, dass wenn z.B. "Jens" seinen Sprachkurs absagen 
//     muss, dass darauf hingewiesen wird, dass Jens nicht ausgetragen
//     werden konnte, da er ja gar nicht eingeschrieben ist.
//
// Wichtig: Schreibe den Code so, dass er später auch mit 3 oder mehr
// Sprachkursen zurechtkommt!

let toRemove = "Jens"

for (let i = 0; i < courses.length; i++) {
  for (let student of courses[i]) {
    if (student === toRemove) {
      courses[i].splice(courses[i].indexOf(toRemove), 1)
      console.log(toRemove, "hat seinen/ihren Sprachkurs abgesagt.")
      break
    }


  }
}

for (let course of courses) {
  console.log(course)
}

// Bonus-Aufgabe:
// 
//  c) Ein neuer Teilnehmer soll eingeschrieben werden. Schreibe ein 
//     Programm, welches diesen neuen Teilnehmern in den Sprachkurs 
//     platziert, der bisher noch am wenigsten Teilnehmer hat.
// 
//     Wie geht dein Programm mit dem Fall um, dass 2 Sprachkurse
//     genau gleich viele Teilnehmer haben? Ist das Verhalten
//     für eine Sprachschule akzeptabel?
