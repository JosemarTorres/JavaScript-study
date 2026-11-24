// Template literals (template de strings, interpolação de strings).

let username = "kotaro";
let email = "kotaro@gmail.com"

// passar mais de um parâmetro.
console.log(username, email);

// concatenação de string.
let message = "Olá, " + username + ". Tudo bem ? " + "me confirma se este é o seu email principal: " + email + "."

console.log(message)

// template literals:
console.log(`Olá, ${username}, este é seu email ? ${email}.`)

