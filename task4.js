// Consulta la Tarea 4 en tus Instrucciones para completar esta tarea

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