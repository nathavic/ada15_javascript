// Operadores relacionales : se resolven con un booleando
// se leen como pregunta: javascript, 5 es mayor que 4?

console.log(5 > 4) // true
console.log(5 < 4) // false


// 5 es mayor o iguel que 5?

console.log(5 <= 5) // true
console.log(5 >= 5) // true

// 5 es igual que 5? - igualdad no-estricta 
// compara por valor, pero no se fija el tipo de dato

let edad = 5

console.log(5 == 5) // true
console.log("5" == 5) // true
console.log(edad == 5) // true

// - el string 5 tiene un valor como valor 5
console.log("5" == 5) // true

/* ejemplo de uso, sites que necesita edad para log:
let edadDelUsuario = prompt("Decime tu edad")
edadDelUsuario <= 18
*/

// igualdad estricta
// compara por valor, tipo de dato a la vez

console.log(5 === 5) // true
console.log("5" === 5) // false
console.log(edad == 5) // true

// desigualdad no-estricta

console.log(5 != 5) // false
console.log("5" != 5) // false

// desigualdad estricta 

console.log(5 !== 5) // false
console.log(5 !== "5") // true

/* ejemplo de uso, distinto o igual:
Club de los NO HOMEROS:

let nombreUser = prompt("Decime tu nombre")
nombreUser === "Homero" -- FALSE (entrar)
nombreUser !== "Homero" -- TRUE (entrar)
*/

/* para js son cosas distintas o sea, los dos es false:
let nombre = "laura"
let nombreMayusculas = "LAURA"

nombre == nombreMayusculas 
nombre === nombreMayusculas
*/


// conversion de booleando ::: reglas :::
//console.log(Boolean("5"))
/* 

-- valores falsy -- coercionan a false
0
-0
undefined
""
NaN

-- valores truthy -- coercionan a true
"un string"
5
-5
*/