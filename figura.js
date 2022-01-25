// Codigo del cuadrado
console.group("Cuadrado");

function  perimetroCuadrado(lado){
return (lado * 4);
}

function areaCuadrado(lado){
return (lado * lado);
}

 console.groupEnd();

/////// Codigo del triangulo
console.group("Triangulo");

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
console.groupEnd();


// Aqui interactuamos con el html


//cuadrado

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro = perimetroCuadrado(value);
return  alert(perimetro);
}
 function calcularAreaCuadrado(){
     const input = document.getElementById("InputCuadrado");
     const value = input.value;
     const area = areaCuadrado(value);
        return alert(area);


 }

 //triangulo

    function calcularPerimetroTriangulo(){

        const lado1 = document.getElementById("InputLado1");
        const lado2 = document.getElementById("InputLado2");
        const base = document.getElementById("InputBase");

        const lado1Value = parseFloat(lado1.value);
        const lado2Value = parseFloat(lado2.value);
        const baseValue = parseFloat(base.value);

        const perimetro = perimetroTriangulo(lado1Value,lado2Value, baseValue);
        return alert(perimetro);

    }

    function calcularAreaTriangulo(){

        const base = document.getElementById("InputBase");
        const altura = document.getElementById("InputAltura");
  
        const baseValue = parseFloat(base.value);
          const alturaValue = parseFloat(altura.value);
  
          const area = areaTriangulo(baseValue, alturaValue);
         
          return alert(area);
          

    

    }

    function alturaTriangulo() {

        const lado1 = document.getElementById("InputLado1");
        const lado2 = document.getElementById("InputLado2");
        const base = document.getElementById("InputBase");

        const lado1Value = parseFloat(lado1.value);
        const lado2Value = parseFloat(lado2.value);
        const baseValue = parseFloat(base.value);

        const teoremaPitagoras = Math.sqrt(lado1Value**2 - ((baseValue/2) ** 2));
      
    const isoceles = lado1Value === lado2Value && baseValue < lado1Value + lado2Value ? true : false;
    if(isoceles == false) {
        alert("El triangulo no es isosceles");
    } else {
alert(teoremaPitagoras);
    }

 
        }



    

   
