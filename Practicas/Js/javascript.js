/*    
-----------------------------------------Prototipos-------------------------------------------

function Carros(
    llantas,
    tipoCarro,
    modelo,
    referencia,
    marca,
    caballosFuerza,
    estado
) {
    //ATRIBUOS
    this.llantas = llantas;
    this.tipoCarro = tipoCarro;
    this.modelo = modelo;
    this.referencia = referencia;
    this.marca = marca;
    this.caballosFuerza = caballosFuerza;
    this.estado = estado;
}
//METODOS
Carros.prototype.sonar = function () {
    console.log("ruuuun");
};
const huracan = new Carros(
    4,
    "Deportivo",
    2018,
    "Lamborghinhi Huracan",
    "Lamborghinhi",
    640,
    "Nuevo"
);
console.log(huracan);
huracan.sonar();
*/

/*
--------------------------------------Clases y Objetos-------------------------------
class Carros {
    //ATRIBUOS
    constructor(
        llantas,
        tipoCarro,
        modelo,
        referencia,
        marca,
        caballosFuerza,
        estado
    ) {
        this.llantas = llantas;
        this.tipoCarro = tipoCarro;
        this.modelo = modelo;
        this.referencia = referencia;
        this.marca = marca;
        this.caballosFuerza = caballosFuerza;
        this.estado = estado;
        this.tipoDeLlantas = null;
    }
    //METODOS
    sonar() {
        console.log("ruuuun");
    }
    get getTipoDeLlantas() {
        return this.tipoDeLlantas;
    }
    set setTipoDeLlantas(value) {
        this.tipoDeLlantas = value;
    }
}

const huracan = new Carros(
    4,
    "Deportivo",
    2018,
    "Lamborghinhi Huracan",
    "Lamborghinhi",
    640,
    "Nuevo"
);
console.log(huracan);
huracan.sonar();

huracan.setTipoDeLlantas = "deportivas";   # Establecer el valor de una propiedad (con SETTERS)
console.log(huracan.getTipoDeLlantas);     # Pedir el valor de una propiedad  (CON GETTERS)
*/

/*
----------------------------------------OBJETO CONDSOLE---------------------------------------
console.error("Error"); //# Muestra un mensaje en color rojo
console.info("Info"); //# Muestra un mensaje en color azul claro
console.warn("Advertencia"); //# Muestra un mensaje en color amarillo
console.log("Información normal"); //# Mostrará el mensaje en color blanco
console.group("Grupo de mensajes"); //# Agrupamos los siguientes mensajes
console.log("Mensaje del grupo 1");
console.log("Mensaje del grupo 2");
console.groupEnd("Fin del grupo"); //# Cerrado del agrupamiento
console.clear(); //# Limpia la consola
console.table(Object.entries(console)); //# Formatea como tabla
console.clear();

console.time("Cuanto tarda");
const arreglo = Array(1000);
for (let index = 0; index < arreglo.length; index++) {
    arreglo[index] = Math.random() * 100;
}
console.timeEnd("Cuanto tarda"); //# Medir tiempo transcurrido entre time y time End
console.log(arreglo);
*/

/*
-----------------------------------------------METODO MATH-------------------------------------
console.log(Math.abs(-9));                          //# Devuelve el valor absoluto de un número
console.log(Math.ceil(15.3));                       //# Redondea hacia arriba a un entero mayor o igual que el número dado.
console.log(Math.floor(15.7));                      //# Redondea hacia abajo a un entero menor o igual que el número dado.
console.log(Math.round(15.5));                      //# Redondea al entero más cercano.
console.log(Math.sqrt(4));                          //# Retorna la raiz cuadrada de un número
console.log(Math.pow(8, 2));                        //# Retorna el resultado de elevar un número a la potencia especificada
console.log(Math.sign(-10));                        //# Devuelve el signo de un número (-1 (negativo),  0 (cero) o 1 (positivo))
console.log(Math.round(Math.random() * 1000));      //# Número aleatorio entre  0 y 999
*/

/*
-----------------------------------------------OPERADOR CORTOCIRCUITO-------------------------------------

CORTOCIRCUITO CON OR : ||
Si el primer operando es verdadero, no se evalúa la segunda condicion
si el primer operando es falso, se evalúa la segunda condicion


function saludar(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
saludar("David");
saludar();

console.log(true || false);                                         //# True
console.log(false || true);                                         //# True
console.log("Cadena" || "Valor de la derecha");                     //# Cadena
console.log(null || "Valor de la derecha");                         //# Valor de la derecha
console.log(undefined || "Valor de la derecha");                    //# Valor de la derecha



CORTOCIRCUITO CON AND: &&
Si el primer operando es falso, no se evalúa el segundo operando
si el primer operando es verdadero, se evalúa el segundo operando

console.log(true && "David");                                       //# David
console.log(false && "David");                                      //# False
console.log(false && null);                                         //# False
console.log(false && undefined);                                    //# False
console.log(true && 3 < 5);                                         //# True
console.log("Cadena"  && "otra cadena");                            //# Cadena
console.log("Cadena"  && "false");                                  //# False
console.log("Cadena"  && 0);                                        //# 0
*/

/*
-------------------------------------------EXPRESIONES  REGULARES------------------------------------------
Las expresiones regulares son una forma de describir patrones de texto en un lenguaje de programación llamado Perl. Est
Es una forma de describir patrones de texto en un lenguaje de programación
let cadena =
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo in dolorem non delectus eaque voluptatum ad nesciunt maxime recusandae aliquid aperiam alias porro illum, eveniet aliquam quibusdam maiores consequuntur.";

let expReg = new RegExp("lorem", "ig");
console.log(expReg.test(cadena));        //#El metodo test() devuelve TRUE o FALSE dependiendo de si encuentra o no lo que buscamos en nuestra cadena
console.log(expReg.exec(cadena));

let expReg2 = /lorem/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
*/

/*
-----------------------------------------------FUNCIONES ANONIMAS AUTOEJECUTABLES------------------------------------------------
(function () {
    console.log("primera funcion anonima");
})();

(function () {
    console.log("segunda funcion anonima");
})();
*/

/*
----------------------------------------------Bucles------------------------------------
for (let i = 0; i <= 500; i += 2) {
    console.log(i);
}
console.log(
    "-----------------------------------------------------------------------------------------\n---------------------------------------while---------------------------------------------\n-----------------------------------------------------------------------------------------"
);
let contador = 500;
while (contador > 0) {
    console.log(contador);
    contador = contador - 5;
}
console.log(
    "-----------------------------------------------------------------------------------------\n---------------------------------------Do while---------------------------------------------\n-----------------------------------------------------------------------------------------"
);
let contador2 = 200;
do {
    console.log(contador2);
    contador2 = contador2 + 4;
} while (contador2 <= 400);
*/
