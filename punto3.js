let p = [];
let q = [];
for (let i = 0; i < 5; i++) {
  p[i] = parseInt(prompt("ingrese un valor para la primera base de datos"));
  while (p[i] < p[i - 1]) {
    p[i] = parseInt(prompt("escriba un valor correctamente"));
  }
}
console.log(p);
for (let i = 0; i < 5; i++) {
  q[i] = parseInt(prompt("ingrese un valor para la segunda base de datos"));
  while (q[i] < q[i - 1]) {
    q[i] = parseInt(prompt("escriba un valor correctamente"));
  }
}
console.log(q);
let merged = p.concat(q);
console.log(merged.sort());
