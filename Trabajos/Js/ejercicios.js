//--------------------------------------Ejercicio 1-----------------------------------
let sacarPorcentajeValorConstante = () => {
    const n = 500,
        p = parseFloat(prompt("Ingrese el porcentaje a sacar: "));
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = "El " + p + " % de " + n + " es " + n * (p / 100);
    console.log("El " + p + " % de " + n + " es " + n * (p / 100));
};
//------------------------------------- Ejercicio 2------------------------------
let sacarPorcentaje = () => {
    let n = parseFloat(
            prompt("Ingrese el numero al que le desea encontrar el porcentaje: ")),
        porcentaje = parseFloat(prompt("Ingrese el porcentaje que desea encontrar: "));
    let salida = document.querySelector("#contenedor");
    salida.innerHTML =
        "El " + porcentaje + " % de " + n + " es " + n * (porcentaje / 100);
    console.log("El " + porcentaje + " % de " + n + " es " + n * (porcentaje / 100));
};
//------------------------------------  Ejercicio 3----------------------------------------
let aumentoDeSueldo = () => {
    let s = parseFloat(prompt("Ingrese el sueldo del empleado: ")),
        p = 25;
        s = s + (s * p) / 100;
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = "El nuevo sueldo del empleado es de: <br> " + s;
    console.log(s + s * (p / 100)); 
};
//--------------------------------------Ejercicio 4----------------------------------------
let aumentoDeSueldoEnPorcentaje = () => {
    let s = parseFloat(prompt("Ingrese el sueldo del empleado: ")),
        p = parseFloat(prompt("Ingrese el porcentaje del aumento: "));
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = `El salario con un aumento en ${p}% es: ${(s += s * (p / 100))}`;
    console.log(`El salario con un aumento en ${p}% es: <br> ${(s += s * (p / 100))}`);
};
//--------------------------------------Ejercicio 5--------------------------------------------
let aumentoDeSueldoHorasExtras = () => {
    let sueldo = parseFloat(prompt("Ingrese el sueldo del empleado: ")),
        he = parseFloat(prompt("Horas extras trabajadas: ")),
        vhe = 3000;
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = `${sueldo + he * vhe}`;
    console.log(sueldo + he * vhe); 
};
//--------------------------------------Ejercicio 6-----------------------------------------
let cuentaTratamientoMedico = () => {
    let vt = parseFloat(prompt("Ingrese el valor del tratamiento: ")),
        dt = parseFloat(prompt("Ingrese la duracion en dias del tratamiento: "));
    const valorDia = 100000;
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = `El valor total a pagar es:  \n $  ${(vt + dt * valorDia)}`;
    console.log("El valor total a pagar es:  \n $" + (vt + dt * valorDia)); 
};
//--------------------------------------Ejercicio 7------------------------------------------
let areaTriangulo = () => {
    let altura = parseFloat(prompt("Ingrese la altura del triangulo: ")),
        base = parseFloat(prompt("Ingrese la base del triangulo: "));
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = `El area del triangulo es : \n  ${(base * altura) / 2} cm^2`;
    console.log("El area del triangulo es : \n" + (base * altura) / 2);
};
//--------------------------------------Ejercicio 8-------------------------------------------
let resolverEcuacion = () => {
    let a = parseFloat(prompt("Ingrese el valor de a: ")),
        b = parseFloat(prompt("Ingrese el valor de b: "));
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = `x =  ${(a + b * 2 * a)}`;
    console.log("x = " + (a + b * 2 * a));
};
//--------------------------------------Ejercicio  9-------------------------------------------
let sumarDecimales = () => {
    let decimal1 = parseFloat(prompt("Ingrese el numero decimal #1: ")),
        decimal2 = parseFloat(prompt("Ingrese el numero decimal #2: ")),
        decimal3 = parseFloat(prompt("Ingrese el numero decimal #3: "));
    let salida = document.querySelector("#contenedor");
    salida.innerHTML =`La sumatoria de los decimales es: \n ${(decimal1 + decimal2 + decimal3)}`;
    console.log(decimal1 + decimal2 + decimal3); 
};
//------------------------------------ -Ejercicio 10-----------------------------------------
let sumarDecimalesPor2 = () => {
    let decimal1 = parseFloat(prompt("Ingrese el numero decimal #1: ")),
        decimal2 = parseFloat(prompt("Ingrese el numero decimal #2: ")),
        decimal3 = parseFloat(prompt("Ingrese el numero decimal #3: "));
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = (decimal1 + decimal2 + decimal3) * 2;
    console.log((decimal1 + decimal2 + decimal3) * 2); 
};
//--------------------------------------Ejercicio  11----------------------------------------
let calcularPromedioNotas = () => {
    let notas = [];
    for (let i = 0; i < 3; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}: `));
        notas.push(nota);
    }
    let suma = notas.reduce((total, item) => total + item, 0),
        promedio = suma / notas.length;
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = `El promedio de las notas ingresadas son: \n  ${promedio}`;
    console.log(`El promedio de las notas es: ${promedio}`); 
};
//----------------------------------- -Ejercicio 12-------------------------------------------
let imprimirDatos = () => {
    let nombre = prompt("Por favor ingrese su nombre completo: "),
        documento = prompt("Por favor ingrese su documento de identidad: "),
        edad = prompt("Por favor ingrese su edad: "),
        profesion = prompt("Por favor ingrese su profesión: ");

    console.log("\nDatos ingresados:");
    console.log("Nombre completo: " + nombre);
    console.log("Documento: " + documento);
    console.log("Edad: " + edad);
    console.log("Profesión: " + profesion);

    console.log("\nBienvenido!!!");

    let salida = document.querySelector("#contenedor");
    salida.innerHTML += "<br> Datos del usuario: Nombre completo: " + nombre + "<br> Documento: " + documento + "<br> Edad:" + edad + "<br> Profesion: " + profesion + "<br><br> Bienvenido!!!";
};
//-------------------------------------Ejercicio 13------------------------------------------
let calcularDevolucion = () => {
    let precioArticulo = parseFloat(prompt("Ingrese el precio del artículo: ")),
        cantidadArticulos = parseInt(prompt("Ingrese la cantidad de artículos a comprar: ")),
        valorEntregado = parseFloat( prompt("Ingrese el valor entregado por el cliente: ")),
        totalCompra = precioArticulo * cantidadArticulos;

    if (valorEntregado >= totalCompra) {
        let devolucion = valorEntregado - totalCompra;
        let salida = document.querySelector("#contenedor");
        salida.innerHTML = `La devolución para el cliente es: ${devolucion}`;
        console.log(`La devolución para el cliente es: ${devolucion}`);
    } else {
        let falta = totalCompra - valorEntregado;
        let salida = document.querySelector("#contenedor");
        salida.innerHTML = `Al cliente le falta dinero para pagar la cuenta. Necesita: ${falta}`;
        console.log(`Al cliente le falta dinero para pagar la cuenta. Necesita: ${falta}`);
    }
};
//-------------------------------------Ejercicio 14-----------------------------------------
let imprimirDatosConTelefono = () => {
    let nombre = prompt("Por favor ingrese su nombre completo: "),
        documento = prompt("Por favor ingrese su documento de identidad: "),
        edad = prompt("Por favor ingrese su edad: "),
        profesion = prompt("Por favor ingrese su profesión: "),
        telefono = prompt("Por favor ingrese su numero de telefono: ");

    console.log("\nDatos ingresados:");
    console.log("Nombre completo: " + nombre);
    console.log("Documento: " + documento);
    console.log("Edad: " + edad);
    console.log("Profesión: " + profesion);
    console.log("Telefono: " + telefono);

    console.log("\nBienvenido!!!");
    let salida = document.querySelector("#contenedor");
    salida.innerHTML += "<br> Datos del usuario: Nombre completo: " + nombre + "<br> Documento: " + documento + "<br> Edad:" + edad + "<br> Profesion: " + profesion + "<br> Telefono: " + telefono + "<br><br> Bienvenido!!!";
};
//-------------------------------------Ejercicio 15---------------------------------------
let calcularSalario = () => {
    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas: ")),
        salario = horasTrabajadas * 2000,
        descuentoSeguridad = salario * 0.1,
        salarioFinal = salario - descuentoSeguridad;

    console.log(`El salario bruto es: ${salario}`);
    console.log(`El descuento de seguridad es: ${descuentoSeguridad}`);
    console.log(`El salario neto (después de descuentos) es: ${salarioFinal}`);
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = ` El salario bruto es: ${salario} <br> El descuento de seguridad es: ${descuentoSeguridad} <br> El salario neto (después de descuentos) es: ${salarioFinal}`;
};
//-------------------------------------Ejercicio 16--------------------------------------
let calcularNuevoSalario = () => {
    let salarioActual = parseFloat(prompt("Ingrese el salario actual del obrero: ")),
        incremento = parseFloat(prompt("Ingrese el porcentaje de incremento determinado por el jefe: ")),
        incrementoSalario = salarioActual * (incremento / 100),
        nuevoSalario = salarioActual + incrementoSalario;

    console.log(`El nuevo salario del obrero es: ${nuevoSalario}`);
    let salida = document.querySelector("#contenedor");
    salida.innerHTML = `El nuevo salario del obrero es: ${nuevoSalario}`
};
//-------------------------------------Ejercicio 17-----------------------------------------
let calcularNotaDefinitiva = () => {
    let nota1 = parseFloat(prompt("Ingrese la nota 1: "));
        nota2 = parseFloat(prompt("Ingrese la nota 2: ")),
        notaTrabajos = parseFloat(prompt("Ingrese la nota de trabajos: ")),
        examenFinal = parseFloat(prompt("Ingrese la nota del examen final: ")),
        notaDefinitiva =nota1 * 0.2 + nota2 * 0.2 + notaTrabajos * 0.3 + examenFinal * 0.3;

    console.log(`La nota definitiva es: ${notaDefinitiva}`);
    let  salida=document.querySelector('#contenedor');
    salida.innerHTML = `La nota definitiva es: ${notaDefinitiva}`
};
//-------------------------------------Ejercicio 18------------------------------------------
let calcularRendimientoCDT = () => {
    let monto = parseFloat(prompt("Ingrese el monto del CDT: ")),
        plazoDias = parseInt(prompt("Ingrese el plazo en días del CDT: ")),
        tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (en porcentaje): ")),
        tasaInteresDiaria = tasaInteresAnual / 100 / 365,
        rendimiento = monto * tasaInteresDiaria * plazoDias;

    console.log(`El rendimiento del CDT es: ${rendimiento}`);
    let salida = document.querySelector("#contenedor")
    salida.innerHTML = `El rendimiento del CDT es: ${rendimiento.toFixed(4)}`
};

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

async function main() {
    let confirmacion = true;
    while (confirmacion === true) {
        let eleccionEjercicio = parseInt(prompt("Que ejercicio desea ver (Dijite un numero del 1 al 18)"));
        switch (eleccionEjercicio) {
            case 1:
                sacarPorcentajeValorConstante();
                break;
            case 2:
                sacarPorcentaje();
                break;
            case 3:
                aumentoDeSueldo();
                break;
            case 4:
                aumentoDeSueldoEnPorcentaje();
                break;
            case 5:
                aumentoDeSueldoHorasExtras();
                break;
            case 6:
                cuentaTratamientoMedico();
                break;
            case 7:
                areaTriangulo();
                break;
            case 8:
                resolverEcuacion();
                break;
            case 9:
                sumarDecimales();
                break;
            case 10:
                sumarDecimalesPor2();
                break;
            case 11:
                calcularPromedioNotas();
                break;
            case 12:
                imprimirDatos();
                break;
            case 13:
                calcularDevolucion();
                break;
            case 14:
                imprimirDatosConTelefono();
                break;
            case 15: 
                calcularSalario();
                break;
            case 16:
                calcularNuevoSalario();
                break;
            case 17:
                calcularNotaDefinitiva();
                break;
            case 18:
                calcularRendimientoCDT();
                break;
        }
        await delay(6000); 
        confirmacion = confirm("¿Desea continuar con otro ejercicio?"); 
    }
}

main();