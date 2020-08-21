// 19. calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el 
// puntaje de un examen que consiste en ejercicios de distinto nivel. 
// Debe tomar como argumento tres numeros que consisten en la cantidad 
// de ejercicios resueltos en cada nivel y devolver un número con 
// el puntaje correspondiente. 
// El puntaje se calcula de la siguiente forma:

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos
// calcularPuntaje(3, 0, 0) // 9
// calcularPuntaje(0, 2, 1) // 20
// calcularPuntaje(5, 1, 2) // 40


const calcularPuntaje = (facil, normal, dificil) => {
    const totalFaciles = facil * 3
    const totalNormales = normal * 5
    const totalDificiles = dificil * 10
    return totalFaciles + totalNormales + totalDificiles
}


console.log(calcularPuntaje(3, 0, 0))
console.log(calcularPuntaje(0, 2, 1))
console.log(calcularPuntaje(5, 1, 2))



//ejemplo Male SIMPLES:

const calcularPuntajeM = (facil, normal, dificil) => {
    return facil * 3 + normal * 5 + dificil * 10
}

console.log(calcularPuntajeM(3, 0, 0))
console.log(calcularPuntajeM(0, 2, 1))
console.log(calcularPuntajeM(5, 1, 2))