let ages = [17, 18, 20, 15, 16, 19];
let menores = 0;
let adultos = 0;

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    adultos++;
  } else {
    menores++;
  }
}

console.log("Menores:", menores);
console.log("Adultos:", adultos);

var min = Math.min(...ages);
console.log("Min:", min)

var max = Math.max(...ages);
console.log("Max:", max)
 
var sum = ages.reduce((a, b) => a + b, 0);
console.log("Sum:", sum)

var promedio = sum / ages.length;
console.log("Promedio:", promedio)