//darle nombre en los parametros para la funcion
//ejecultar adentro del () ej nombre, apellido

const obtenerNombreCompleto = (nombre, apellido) => {
    let nombreCompleto = nombre + " " + apellido
    return nombreCompleto
}

//obetenerNombreCompleto() = ejecultá 

// ejeculta y mostrame el resultado
console.log(obtenerNombreCompleto("kah", "mah"))
console.log(obtenerNombreCompleto("pah", "jah"))
console.log(obtenerNombreCompleto("zah", "tah"))


// resultado 4 en la consola 
console.log(2 + 2)


//6. gritar(str)

const gritar = (str) => {
    return `¡${str}!`
}

//${} ejecultar una variable en la string

console.log(gritar("Boooo"))
console.log(gritar("Muuuu"))
console.log(gritar("Auuuu"))


//7. obtenerNombreCompleto(nombre, apellido)

const obtenerNombreCompleto1 = (nombre1, apellido1) => {
    return `${nombre1} ${apellido1}`
}

console.log(obtenerNombreCompleto1("Eje1", "Eje2"))
console.log(obtenerNombreCompleto1("Eje3", "Eje4"))

const saludar = (parametroNombre) => {
    return `Hola ${parametroNombre}, como va?`
}

console.log(saludar("1 parametro 1 string"))