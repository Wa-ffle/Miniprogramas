// calculadora con suma, resta, multiplicacion y division

const suma = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const resta = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const mult = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}

const div = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("que queres hacer")
let operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division");

if (operacion == 1) {
    let a = prompt("primer numero para sumar");
    let b = prompt("segundo numero para sumar");
    resultado = suma(a,b);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 2) {
    let a = prompt("primer numero para restar");
    let b = prompt("segundo numero para restar");
    resultado = resta(a,b);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 3) {
    let a = prompt("primer numero para multiplicar");
    let b = prompt("segundo numero para multiplicar");
    resultado = mult(a,b);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 4) {
    let a = prompt("primer numero para dividir");
    let b = prompt("segundo numero para dividir");
    resultado = div(a,b);
    alert(`tu resultado es ${resultado}`);
}else{
    alert("no se encontro la operacion deseada");
}