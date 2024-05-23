let key = prompt(
  "este algoritmo le ayudara a a calcular el area y/o perimetro de algunas figuras planas.ingrese el nombre de la figura, ya sea triangulo, rectangulo,cuadrado o circulo"
);
switch (key) {
  case "triangulo":
    let triangulo = prompt(
      "escriba la palabra area o perimetro segun la operacion que desea hacer"
    );
    switch (triangulo) {
      case "perimetro":
        let lado1 = parseInt(prompt("ingrese el valor del lado 1"));
        let lado2 = parseInt(prompt("ingrese el valor del lado 2"));
        let lado3 = parseInt(prompt("ingrese el valor del lado 3"));
        let area = lado1 + lado2 + lado3;
        console.log("el perimetro del triangulo es: ", area);
        break;
      case "area":
        let base = parseInt(prompt("ingrese el valor de la base"));
        let altura = parseInt(prompt("ingrese el valor de la altura"));
        let perimetro = (base * altura) / 2;
        console.log("el area del triangulo es: ", perimetro);
        
        break;
      default: 
        console.log("opcion no valida");
        break;
    }
    break;
  case "rectangulo":
    let rectangulo = prompt(
      "escriba la palabra area o perimetro segun la operacion que desea hacer"
    );
    switch (rectangulo) {
      case "area":
        let base = parseInt(prompt("ingrese el valor de la base"));
        let altura = parseInt(prompt("ingrese el valor de la altura"));
        let area = base * altura;
        console.log("el area del rectangulo es: ", area);
        break;
      case "perimetro":
        let base1 = parseInt(prompt("ingrese el valor de la base "));
        let altura1 = parseInt(prompt("ingrese el valor de la altura"));
        let perimetro = (base1 + altura1) * 2;
        console.log("el perimetro del rectangulo es: ", perimetro);
        break;
      default:
        console.log("opcion no valida");
        break;
    }
    break;
  case "cuadrado":
    let cuadrado = prompt(
      "escriba la palabra area o perimetro segun la operacion que desea hacer"
    );
    switch (cuadrado) {
      case "area":
        let lado = parseInt(prompt("ingrese el valor del lado"));
        let area = lado * lado
        console.log("el area del cuadrado es: ", area);
        break;
      case "perimetro":
        let lado1 = parseInt(prompt("ingrese el valor del lado"));
        let perimetro = lado1 * 4;
        console.log("el perimetro del cuadrado es: ", perimetro);
        break;
      default:
        console.log("opcion no valida");
        break;
    }
    break;
  case "circulo":
    let circulo = prompt(
      "escriba la palabra area o perimetro segun la operacion que desea hacer"
    );
    switch (circulo) {
      case "area":
        let radio = parseInt(prompt("ingrese el valor del radio"));
        let area = Math.PI * radio * radio;
        console.log("el area del circulo es: ", area);
        break;
      case "perimetro":
        let radio1 = parseInt(prompt("ingrese el valor del radio"));
        let perimetro = 2 * Math.PI * (radio1*radio1);
        console.log("el perimetro del circulo es: ", perimetro);
        break;
      default:
        console.log("opcion no valida");
        break;
    }
    break;
  default:
    console.log("opcion no valida");
    break;
}

