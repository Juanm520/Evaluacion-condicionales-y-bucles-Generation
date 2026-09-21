// Consulta la Tarea 6 en tus Instrucciones para completar esta tarea

// Consulta la Tarea 5 en tus Instrucciones para completar esta tarea
const prompt = require('prompt-sync')();

// Arreglo Salida

const salida = []

//Es especifica o lineas

let esEspecificaPrompt = prompt('Desea ingresar numero de lineas o una linea especifica (L/E): ')

while (esEspecificaPrompt.toLowerCase() !== 'l' && esEspecificaPrompt.toLowerCase() !== 'e') {
  console.log('Opción inválida. Por favor, ingrese "L" para lineas o "E" para especifica.')
  esEspecificaPrompt = prompt('Desea ingresar numero de lineas o una linea especifica (L/E): ')
}

if (esEspecificaPrompt.toLowerCase() === 'l') {

  let numLineas = parseInt(prompt('Ingrese el número de lineas: '))

  while (isNaN(numLineas) || numLineas <= 0) {
    console.log('Opción inválida. Por favor, ingrese un número válido.')
    numLineas = parseInt(prompt('Ingrese el número de lineas: '))
  }

  for (let i = 0; i <= numLineas; i++) {

    let numSalida = ''
    if (i % 3 === 0) {
      numSalida = numSalida + 'Fizz'
    }

    if (i % 5 === 0) {
      numSalida = numSalida + 'Buzz'
    }

    if(i % 7 === 0) {
      numSalida = numSalida + 'Woof'
    }

    if (numSalida === '') {
      salida.push(i)
    } else {
      salida.push(numSalida)
    } 
  }
  console.log(salida)
} else {

  let lineaEspecifica = parseInt(prompt('Ingrese la línea específica: '))

  while (isNaN(lineaEspecifica) || lineaEspecifica < 0) {
    console.log('Opción inválida. Por favor, ingrese un número válido.')
    lineaEspecifica = parseInt(prompt('Ingrese la línea específica: '))
  }

    let numSalida = ''

    if (lineaEspecifica % 3 === 0) {
      numSalida = numSalida + 'Fizz'
    }

    if (lineaEspecifica % 5 === 0) {
      numSalida = numSalida + 'Buzz'
    } 
    
    if(lineaEspecifica % 7 === 0) {
      numSalida = numSalida + 'Woof'
    }

    if (numSalida === '') {
      salida.push(lineaEspecifica)
    } else {
      salida.push(numSalida)
    }

    console.log(salida)
}

   
