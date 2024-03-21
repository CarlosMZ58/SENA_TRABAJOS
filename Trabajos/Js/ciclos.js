function datosUsuario(numeroUsuario) {
    let numUsuario = numeroUsuario
    console.log("-para-")
    for (let i = 0; i < numUsuario+1 ; i++) {
    console.log(i)
    } 
    console.log("-mientras-")
    let controlador = 0
    while ( controlador < numUsuario+1 ) {
        console.log(controlador)
        controlador++
    }
    console.log("-hacer mientras-")
    let controlador2 = 0
    do {
        console.log(controlador2)
        controlador2++
    } while (controlador2 < numUsuario+1);
}

function sumaNumeroNatural() {
    let suma=0
    let sumaMientras = 0
    let sumaDos = 0
    let att = 0
    let nuevaSuma = 0
    console.log("-para-")
    for (let i = 0; i < 11; i++) {
        suma +=i
    }
    
    console.log(suma);
    console.log("-mientras-")
    while (sumaDos<=10) {
        sumaMientras += sumaDos
        sumaDos++
    }
    console.log(sumaMientras)
    console.log("-hacer mientras-")
    do {
        nuevaSuma += att
        att++
    } while (att <=10);
    console.log(nuevaSuma)
}

function sumaMod(datosUsuario) {
    let datosDeUsuario = datosUsuario
    let sumaEjec = 0
    let sumaEjec3 = 0
    let ejecSuma = 0
    console.log("-para-")
    for (let i = 0; i <= datosDeUsuario; i++) {
        sumaEjec+=i
    }
    console.log(sumaEjec)
    let sumaEjec2 = 0
    console.log("-mientras-")
    while (sumaEjec2 <= datosDeUsuario) {
        sumaEjec3+=sumaEjec2
        sumaEjec2++
    }
    console.log(sumaEjec3)
    console.log("-hacer mientras-")
    let sumaEjec4 = 0
    do {
        ejecSuma += sumaEjec4
        sumaEjec4++
    } while (sumaEjec4 <= datosDeUsuario);
    console.log(ejecSuma)
}

function numeroImpar() {
    let cero = 0
    let zero = 0
    console.log("-para-")
    for (let i = 1; i <= 20; i++) {
        if (i%3 == 0){
            console.log(i)
        }
    }
    console.log("-mientras-")
    while (cero < 20) {
        cero++
        if (cero%3 ==0){
            console.log(cero)
        }
    }
    console.log("-hacer mientras-")
    do {
        zero++
        if (zero%3 ==0){
            console.log(zero)
        }       
    } while (zero < 20);
}

function imprimirListaNumero (){
    let lista = []
    console.log("-mientras-")
    while (true){
        let nuevoNum = parseInt(prompt("ingrese un numero (precione 0 para terminar)"))
        if (nuevoNum === 0 ){
            console.log("su lista de numeros ingresados:", lista)
            break
        }else {
            lista.push(nuevoNum)
        }
    }
}

function promedio() {
    let decision = true;
    console.log("-hacer mientras-")
    do {
        let primero = parseFloat(prompt("ingrese la primer nota"))
        let segundo = parseFloat(prompt("ingrese la segunda nota"))
        let tercero = parseFloat(prompt("ingrese la tercer nota"))
        let promedio = (primero + segundo + tercero)/3
        console.log("el promedio es: ", promedio)
        decision = confirm("desea volver a sacar otro promedio?")
    } while (decision === true);
}   

function tablaDe5() {
    let contador = 0
    console.log("-mientras-")
    while(contador < 10){
        contador++
        let tabla = contador * 5
        console.log(contador ,"* 5 = " ,tabla)
    }
}

function tablaNumeroX (){
    console.log("-para-")
    let numeroTabla = parseInt(prompt("ingrese un numero para imprimir su tabla de multiplicacion"))
    let numeroMax = parseInt(prompt("hasta que numero quiere que se imprima la tabla"))
    for (let i = 1; i <= numeroMax; i++) {
        let tablaDeNumeroTabla = i * numeroTabla
        console.log(i ," * " ,numeroTabla ," = " ,tablaDeNumeroTabla )
    }
}

let solucion = parseInt(prompt("ingrese el numero del ejercicio que quiere ver (1 - 8)"))

switch (solucion) {
    case 1:
        datosUsuario(parseInt(prompt(("ingrese un numero"))));
        break;
    case 2:
        sumaNumeroNatural();
        break;
    case 3:
        sumaMod(parseInt(prompt("ingrese un numero para sumarle sus primeros numeros naturales")));
        break;
    case 4:
        numeroImpar();
        break;
    case 5:
        imprimirListaNumero();
        break;
    case 6:
        promedio();
        break;
    case 7:
        tablaDe5();
        break;
    case 8:
        tablaNumeroX();
        break;
    default:
        break;
}