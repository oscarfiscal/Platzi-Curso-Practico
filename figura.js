// Codigo del cuadrado
console.group("Cuadrado");
//const  ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden:"+ ladoCuadrado + "cm");

function  perimetroCuadrado(lado){
return (lado * 4);
}
//console.log("El perimetro del cuadrado es:"+ perimetroCuadrado + "cm");
function areaCuadrado(lado){
return (lado * lado);
}

//console.log("El area del cuadrado es:"+ areaCuadrado + "cm^2");
 console.groupEnd();
/////// Codigo del triangulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2=6;
//const baseTriangulo=4;
//const alturaTriangulo=5.5;
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;


//console.log("Los lados del triangulo miden:"+ ladoTriangulo1 + "cm y "+ ladoTriangulo2 + "cm" 
//+ " la base del triangulo es:"+ baseTriangulo + "cm");

//console.log("la altura del triangulo es:"+ alturaTriangulo + "cm");

//console.log("el perimetro del triangulo es:"+ perimetroTriangulo + "cm");

//console.log("el area del triangulo es:"+ areaTriangulo + "cm^2");

function perimetroTriangulo( lado1, lado2, base){
    return (lado1 + lado2 + base);
    }
function areaTriangulo( base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

// Codigo del circulo

console.group("Circulo");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es:"+ radioCirculo + "cm");
//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es:"+ diametroCirculo + "cm");
//PI
const PI = Math.PI;

//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;


}

//area
function areaCirculo(radio){
   
    return radio * radio * PI;

}



console.groupEnd()