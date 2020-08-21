// 17. obtenerCompetencia(a, b)
// Crear una función obtenerCompetencia que tome como argumentos dos strings 
// a y b y devuelva un string con el formato a vs. b

// obtenerRivales('JavaScript', 'Python') // `JavaScript vs. Python`
// obtenerRivales('Coca', 'Pepsi') // `Coca vs. Pepsi`
// obtenerRivales('Perros', 'Gatos') // `Perros vs. Gatos`

const obtenerRivales = (a, b) => {
    return `${a} vs ${b}`
}


console.log(obtenerRivales('JavaScript', 'Python'))
console.log(obtenerRivales('Coca', 'Pepsi'))
console.log(obtenerRivales('Perros', 'Gatos'))