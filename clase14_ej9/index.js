// 9. saludarGritando(nombre, apellido)
// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), 
//crear una función saludarGritando que tome como argumentos un nombre y un apellido 
//y devuelva un saludo con signos de exclamación.

// saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
// TIP: recordá que los resultados de funciones se pueden guardar 
//en variables para usarlos más adelante

// const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
// const saludo = saludar(nombreCompleto)
// const grito = gritar(saludo)
// console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!


let gritar = (palabra1) => {
    return "¡" + palabra1 + "!"
}

const saludar = (nombre) => {
    return `Hola, ${nombre}, un gusto conocerte`
}

const obtenerNombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`
}

const saludarGritando = (nombre, apellido) => {
    let nombreCompleto = obtenerNombreCompleto(nombre, apellido)
    let saludo = saludar(nombreCompleto)
    let grito = gritar(saludo)
    return grito

}

console.log(saludarGritando("Ada", "Lovelace"))
console.log(saludarGritando("Ada", "Lovelace"))
console.log(saludarGritando("Ada", "Lovelace"))