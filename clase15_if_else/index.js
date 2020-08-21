// Estructuras Condicionais

// Sentencia If

// Club de los NO HOMEROS :: ejemplo::

let nombreUser = prompt("Decime tu nombre")

if (nombreUser == "Homero") {
    alert("No podes entrar")
} else {
    alert("Bienvenide")
}

/* Se (if) el nombre del usuario es igual a Homero, 
alerta "NO", ou (else) nombre del usuario no es igual, 
alerta "BienVenide"
*/

let edadUsuario = prompt("Decime tu edad")
if (edadUsuario >= 18) {
    alert("Bienvenida")
} else {
    alert("No podes entrar")
}

//typeoff : mostra que es el valor:

console.log(typeof edadUsuario)
    // string
console.log(typeof alert)
    // function