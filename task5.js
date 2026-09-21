// Consulta la Tarea 5 en tus Instrucciones para completar esta tarea
const prompt = require('prompt-sync')();

//Es especifica o lineas

let esEspecificaPrompt = prompt('Desea ingresar numero de lineas o una linea especifica (l ó e): ')

while (esEspecificaPrompt.toLowerCase() !== 'l' && esEspecificaPrompt.toLowerCase() !== 'e') {
  esEspecificaPrompt = prompt('Desea ingresar numero de lineas o una linea especifica (l ó e): ')
  console.log('Opción inválida. Por favor, ingrese "l" para lineas o "e" para especifica.')
}

const esEspecifica = esEspecificaPrompt.toLowerCase() === 'l' : 


for (let i = 0; i <= 105; i++) {

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
};