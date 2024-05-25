let ages = [];
let menores = 0;
let adultos = 0;
let admayor = 0;
// evaluacion del rango de edad 1 entre 120
for (let i = 0; i < 10; i++) {
  ages[i] = parseInt(prompt("escriba la edad de una persona "));
  while (ages[i] < 1 || ages[i] > 120) {
    ages[i] = parseInt(prompt("escriba la edad correcta de la persona "));
  }
}
for (let j = 0; j < 10; j++) {
  //evaliuacion de personas adultos mayores
  if (ages[j] >= 60) {
    admayor++;
  }
  //evaluacion de personas menores o mayores de edad
  if (ages[j] >= 18) {
    adultos++;
  } else {
    menores++;
  }
}
console.log(ages);
console.log("la cantidad de personas adultas mayores son: ", admayor);
console.log("Las personas menores de edad son: ", menores);
console.log("Las personas mayores de edad son: ", adultos);
let min = Math.min(...ages);
console.log("La edad mas baja es:", min);
let max = Math.max(...ages);
console.log("La edad mas alta es:", max);
let sum = ages.reduce((a, b) => a + b, 0);
let promedio = sum / ages.length;
console.log("El Promedio de edad es: ", promedio);
