// 18. generarEmail(usuario, dominio)
// Crear una función generarEmail que tome como argumentos dos string usuario y dominio y 
// el un string email con el formato usuario@dominio.com

// generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'

const generarEmail = (usuario, dominio) => {
    let email = `${usuario}@${dominio}.com`
    return email
}


console.log(generarEmail('adalovelace', 'gmail'))