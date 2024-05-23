let key = prompt(
  "este algoritmo le ayudara a a calcular el area y/o perimetro de algunas figuras planas.ingrese el nombre de la figura, ya sea triangulo, rectangulo,cuadrado o circulo"
);
switch (key) {
  case "triangulo":
    let triangulo = prompt(
      "escriba la palabra area o perimetro segun la operacion que dsea hacer"
    );
    switch (triangulo) {
      case "area":
        let lado1 = parseInt(prompt("ingrese el valor del lado 1"));
        let lado2 = parseInt(prompt("ingrese el valor del lado 2"));
        let lado3 = parseInt(prompt("ingrese el valor del lado 3"));
        let area = lado1 + lado2 + lado3;
        console.log("el area del triangulo es: ", area);
        break;
      case "perimetro":
        let base = parseInt(prompt("ingrese el valor de la base"));
        let altura = parseInt(prompt("ingrese el valor de la altura"));
        let perimetro = (base * altura) / 2;
        console.log("el perimetro del triangulo es: ", perimetro);
        break;

      default:
        break;
    }
    break;
  case "rectangulo":
    break;
  case "cuadrado":
    break;
  case "circulo":
    break;
  default:
    break;
}
