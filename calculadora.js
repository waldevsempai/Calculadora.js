//let nombre = prompt("¿cual es tu nombre?");

alert("Hola! Bienvenido a tu calculadora de prueba");

let numero1 = parseInt(prompt("escribe el primer numero"));
let numero2 = parseInt(prompt("escribe el segundo numero"));

let operacion = prompt("elija la operacion que desea realizar");

if(operacion = "sumar"){
    let resultado = parseInt(numero1) + parseInt(numero2)
    alert("El resultado es " + resultado)
};
if (operacion == "restar"){
    let resultado = parseInt(numero1) - parseInt(numero2)
    alert("El resultado es " + resultado)
};
if (operacion == "multiplicar"){
    let resultado = parseInt(numero1) * parseInt(numero2)
    alert("El resultado es " + resultado) 
};
if (operacion == "dividir"){
    let resultado = parseInt(numero1) / parseInt(numero2)
    alert("El resultado es " + resultado) 
};