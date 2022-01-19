// Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:"+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es:"+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es:"+ areaCuadrado + "cm^2");
 console.groupEnd();
/////// Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo=5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("Los lados del triangulo miden:"+ ladoTriangulo1 + "cm y "+ ladoTriangulo2 + "cm" 
+ " la base del triangulo es:"+ baseTriangulo + "cm");  

console.log("la altura del triangulo es:"+ alturaTriangulo + "cm");

console.log("el perimetro del triangulo es:"+ perimetroTriangulo + "cm");

console.log("el area del triangulo es:"+ areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del circulo

console.group("Circulo");
//Radio
const radioCirculo = 4;
//Diametro
const diametroCirculo = radioCirculo * 2;
//PI
const pi = math.pi;
//Circunferencia
const circunferenciaCirculo = diametroCirculo * pi;

//area

const areaCirculo = pi * (radioCirculo * radioCirculo);
console.groupEnd()