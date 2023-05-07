// calculadora con suma, resta, multiplicacion, division, potencia, raiz cuadrada y raiz cubica

class Calculadora {
    constructor(){

    }
Sumar(num1, num2){
    return parseInt(num1) + parseInt(num2);
}
Restar(num1, num2){
    return parseInt(num1) - parseInt(num2);
}
Multiplicar(num1, num2){
    return parseInt(num1) * parseInt(num2);
}
Dividir(num1, num2){
    return parseInt(num1) / parseInt(num2);
}
Potencia(num1,exp){
    return parseInt(num1)**parseInt(exp)
}
RaizCuadrada(num1){
    return Math.sqrt(num1)
}
RaizCubica(num1){
    return Math.cbrt(num1)
}
}
const calculadora = new Calculadora
alert("que queres hacer")
let operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division, 5: potencia, 6: raiz cuadrada, 7: raiz cubica");

if (operacion == 1) {
    let a = prompt("primer numero para sumar");
    let b = prompt("segundo numero para sumar");
    resultado = calculadora.Sumar(a,b);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 2) {
    let a = prompt("primer numero para restar");
    let b = prompt("segundo numero para restar");
    resultado = calculadora.Restar(a,b);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 3) {
    let a = prompt("primer numero para multiplicar");
    let b = prompt("segundo numero para multiplicar");
    resultado = calculadora.Multiplicar(a,b);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 4) {
    let a = prompt("primer numero para dividir");
    let b = prompt("segundo numero para dividir");
    resultado = calculadora.Dividir(a,b);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 5) {
    let a = prompt("cual es la base");
    let b = prompt("cual es el exponente");
    resultado = calculadora.Potencia(a,b);
    alert(`tu resultado es ${resultado}`);
}else if (operacion == 6) {
    let a = prompt ("de que numero deseas saber la raiz cuadrada");
    resultado = calculadora.RaizCuadrada(a);
    alert(resultado);    
}else if (operacion == 7) {
    let a = prompt("de que numero deseas saber la raiz cubica");
    resultado = calculadora.RaizCubica(a);
    alert(resultado);
}else{
    alert("no se encontro la operacion deseada");
}