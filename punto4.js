let canciones = [];
function crearPersona() {
  const nombre = prompt("Ingrese su nombre:");
  const apellido = prompt("Ingrese su apellido:");
  const identificacion = prompt("ingrese su numero de identificacion");
  const fechaN = prompt("ingrese su fecha de nacimiento(dd/mm/aaa)");
  const correo = prompt("ingrese su correo electronico");
  const ciudadN = prompt("ingrese su ciudad de naciemiento");
  const ciudadR = prompt("ingrese su ciudad de residencia");
  const artista = prompt("ingrese el nombre de su artista favorito");
  for (let i = 0; i < 3; i++) {
    canciones[i] = prompt("ingrese el nombre de las canciones favoritas");
  }
  return {
    nombre: nombre,
    apellido: apellido,
    identificacion: identificacion,
    fechaN: fechaN,
    correo: correo,
    ciudadN: ciudadN,
    ciudadR: ciudadR,
    artista: artista,
    canciones: canciones,
  };
}
const personas = [];
let seguirIngresando = true;
while (seguirIngresando) {
  const persona = crearPersona();
  personas.push(persona);
  seguirIngresando =
    prompt("¿Desea ingresar otra persona? (si/no):").toLowerCase() === "si";
}
console.log("Personas ingresadas:");
personas.forEach((persona) => {
  console.log(`Nombre: ${persona.nombre} ${persona.apellido}`);
  console.log(`identificacion: ${persona.identificacion}`);
  console.log(`fecha nacimiento: ${persona.fechaN}`);
  console.log(`correo electronico: ${persona.correo}`);
  console.log(`ciudad de nacimiento: ${persona.ciudadN}`);
  console.log(`ciudad de residencia: ${persona.ciudadR}`);
  console.log(`artista favorito: ${persona.artista}`);
  console.log(`canciones canciones favoritas: ${canciones}`);
  console.log("------------------------");
});
