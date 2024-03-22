let cedula = prompt("Ingrese su numero de cedula: \n"),
    nombre = prompt("Ingrese su primer nombre \n"),
    mitadCedula = parseInt(cedula)/2,
    cedulaArreglo = [],
    valor;

console.log("Numero de cedula:   \n"+cedula);

for (let i= 0 ; i < cedula.length; i++) {
    valor = parseInt(cedula[i])
    cedulaArreglo.push(valor + " * 1 2 y 3 es: \n" + valor + " ,"+ (valor*2)+ " y "+ (valor*3)) 
    console.log(cedulaArreglo[e]);
} 

console.log(`La mitad de su cedula es ${mitadCedula}`);

const divisible = (n)=>{
    if (cedula % n === 0) {
        console.log("si es divisible por" + n);
    } else {
        console.log("no es divisible por" + n);
    }
}
divisible(2), divisible(3), divisible(5);