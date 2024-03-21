/*let numero = parseInt(prompt("Ingrese el numero"));
for (i = 1; i <= 10; i++) {
    let multiplicacion = numero * i;
    let salida = document.querySelector("#hola");
    salida.innerHTML += `${numero}  *   ${i}  = ${multiplicacion}<br/> <br/>`;
}*/

const tablaMultiplicar = (numero)=>{
    for (i = 0; i <= 0; i++){
        let multiplicacion = numero * i
        let salida = document.querySelector("#hola")
        salida.innerHTML += numero + "*" + i + "=" + multiplicacion + "<br/> <br/>"
    }
}
const porcentajeDeConstante = (constante)=>{
    let resultado  = constante * 0.15 
    resultado = document.querySelector("#hola")
    resultado.innerHTML = resultado
}