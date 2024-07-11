//Ejercicios!

/* Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros. */

/* Crear una función que recibe un string y lo convierte en una URL. 
  ej: “pepito” es devuelto como “http://www.pepito.com”
   */

/* Crear una función que recibe un string y devuelve la misma frase pero con admiración. */

/* Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. */

/* Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
  PD: considera que tu mes de trabajo tiene 40 horas. */

/* Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores. */

/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
  Investiga que hace el método de strings .toUpperCase() */

/* Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
  pista: te servirá revisar que hace la palabra reservada typeof. */

/* Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
  Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi */

  // ejercicio #1 

//   function dePulgadasACentimetros(pulgadas) {
//     // 1 pulgada = a 2.54 centímetros
//     let centimetrosPorPulgada = 2.54;
//     return pulgadas * centimetrosPorPulgada;
// }


// let pulgadas = 4;
// let centimetros = dePulgadasACentimetros(pulgadas);
// console.log(`${pulgadas} pulgadas son ${centimetros} centímetros.`);

//Ejercicio #2

// function devuelvoTodoEnUrl(string){
  
//   let url = `http://www.${string}.com`;
//   return url;
// }
// let string = prompt(`Ingrese un nombre o seudonimo: `);
// let url = devuelvoTodoEnUrl(string);
// console.log(url + string);

//Ejercicio #3

// function conAdmiracion(string){
//   return `¡¡${string}!!`;
// }

// let string = prompt("ingrese un string o cadena de caracteres: ");

// let stringconAdmiracion = conAdmiracion(string);
// console.log(stringconAdmiracion);


//#4 (aca me confundi con las variables, y no retornaba lo q debia...)

// function edadDePerro(edad){
//   let aniosPerros = 7;
//   return edad * aniosPerros;
// }

// let edad = parseInt(prompt("ingrese un numero y sera devuelto en anios perros: "));
// let  edadConvertida = edadDePerro(edad);
// console.log(`La edad que tiene su perro es: ${edadConvertida}`);

//#5 

// function calcularValorHora(sueldoMensual){
//   let totalHorasPorMes = parseInt(prompt("Ingrese la cantidad de horas que trabajo este mes: "));
//   return sueldoMensual / totalHorasPorMes;
// }
// let sueldoMensual = parseInt(prompt("Ingrese su sueldo mensual: "));
// let valorHora = calcularValorHora(sueldoMensual);

// console.log(`El valor de la hora trabajada es de: $ ${valorHora}`);

//#6

// function calculoIMC(altura, peso){
//   let imc = peso / (altura * altura);
//   return imc;
// }

// let altura1 = parseFloat(prompt("ingrese su altura por favor: (m)"));
// let peso1 = parseFloat(prompt("ingrese su peso por favor: (kg)"));
// let imc1 = calculoIMC(altura1, peso1);

// console.log(`Para la altura de: ${altura1}m y un peso de ${peso1}kg, el IMC es de: ${imc1}`);

// let altura2 = parseFloat(prompt("ingrese su altura por favor: (m)"));
// let peso2 = parseFloat(prompt("ingrese su peso por favor: (kg)"));
// let imc2 = calculoIMC(altura2, peso2);

// console.log(`Para la altura de: ${altura2}m y un peso de ${peso2}kg, el IMC es de: ${imc2}`);

// let altura3 = parseFloat(prompt("ingrese su altura por favor: (m)"));
// let peso3 = parseFloat(prompt("ingrese su peso por favor: (kg)"));
// let imc3 = calculoIMC(altura3, peso3);

// console.log(`Para la altura de: ${altura3}m y un peso de ${peso3}kg, el IMC es de: ${imc3}`);

//#7

// function convertirTodoMayuscula (string){
//   return string.toUpperCase();
// }

// let stringMinuscula = prompt("Ingrese uns frase de alguna cancion que le guste: ");
// let aMayusculas = convertirTodoMayuscula (stringMinuscula);

// console.log(aMayusculas);

//#8

// function queTipoDeDatoEs(parametro){
//   return typeOf (parametro);
// }

// let numero = ;
// let texto = " ";



// console.log(queTipoDeDatoEs(numero));
// console.log(queTipoDeDatoEs(texto));

//#9

//Con el RADIO: La longitud de una circunferencia es igual a: 2 por pi por el radio.

// function calcularCircunferencia(radio){
//   let circunferencia = 2 * Math.PI * radio;
//   return circunferencia;
// }

// let radio = parseInt(prompt("ingresa el radio del circulo: "));
// let circunferencia = calcularCircunferencia (radio);

// console.log(`La circunferencia del circulo con el radio ${radio} es: ${circunferencia}`);