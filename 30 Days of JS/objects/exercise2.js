const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let highestSkillCount = -1
let mostSkilledUser = ""
let mernStackDevs = []

for (const keys of Object.keys(users)) {
    if (highestSkillCount === -1) {
        highestSkillCount = users[keys].skills.length
        mostSkilledUser = keys
    }
    if (highestSkillCount < users[keys].skills.length) {
        highestSkillCount = users[keys].skills.length
        mostSkilledUser = keys
    }

    if (users[keys].skills.includes("MongoDB") && users[keys].skills.includes("Express") && users[keys].skills.includes("React") && users[keys].skills.includes("Node")) {
        mernStackDevs.push(keys)
    }

}
console.log("mostSkilledUser", mostSkilledUser, "-", "skillCount", highestSkillCount)
console.log("mernStackDevs", mernStackDevs)

users["Leo"] = {
    email: 'leo@leo.de',
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spigot', 'React', 'Node'],
    age: 15,
    isLoggedIn: true,
    points: -1
}


console.log("keys", Object.keys(users))
console.log("values", Object.values(users))

const country = {
    name: "Germany",
    capital: "Berlin",
    languages: ["Bavarian", "German", "Swabian"],
    population: 83000000
}

console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`)
