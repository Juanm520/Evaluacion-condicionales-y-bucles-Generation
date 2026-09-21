// Consulta la Tarea 5 en tus Instrucciones para completar esta tarea
const prompt = require('prompt-sync')();

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

    let salida = ''

    if (i % 3 === 0) {
      salida = salida + 'Fizz'
    }

    if (i % 5 === 0) {
      salida = salida +  'Buzz'
    } 
    
    if(i % 7 === 0) {
      salida = salida + 'Woof'
    }

    if (salida === '') {
      console.log(i)
    } else {
      console.log(salida)
    } 
  }
} else {

  let lineaEspecifica = parseInt(prompt('Ingrese la línea específica: '))

  while (isNaN(lineaEspecifica) || lineaEspecifica < 0) {
    console.log('Opción inválida. Por favor, ingrese un número válido.')
    lineaEspecifica = parseInt(prompt('Ingrese la línea específica: '))
  }

  let salida = ''

    if (lineaEspecifica % 3 === 0) {
      salida = salida + 'Fizz'
    }

    if (lineaEspecifica % 5 === 0) {
      salida = salida +  'Buzz'
    } 
    
    if(lineaEspecifica % 7 === 0) {
      salida = salida + 'Woof'
    }

    if (salida === '') {
      console.log(lineaEspecifica)
    } else {
      console.log(salida)
    }
}

   
