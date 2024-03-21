function Autobus() {
    this.asientos = 25;
    this.pasajerosActuales = 0;
    this.dinero = 0;
    this.paradas = 5;
    this.pasajerosTotales = 0;

    this.bajar = function (pasajeros) {
        let pasajerosPosibles = Math.min(pasajeros, this.pasajerosActuales);
        this.pasajerosActuales -= pasajerosPosibles;
        return pasajerosPosibles;
    };

    this.subir = function (pasajeros) {
        let pasajerosPosibles = Math.min(pasajeros,this.asientos - this.pasajerosActuales);
        this.pasajerosActuales += pasajerosPosibles;
        this.pasajerosTotales += pasajerosPosibles;
        this.dinero += pasajerosPosibles * 3000;
        return pasajerosPosibles;
    };

    this.totalPasajeros = function () {
        return this.pasajerosActuales;
    };

    this.totalDinero = function () {
        return this.dinero;
    };

    this.totalPasajerosSubidos = function () {
        return this.pasajerosTotales;
    };

    this.pasajerosAleatorios = function () {
        return Math.floor(
            Math.random() * (this.asientos - this.pasajerosActuales + 1)
        );
    };

    this.ruta = function () {
        for (let i = 0; i < this.paradas; i++) {
            let pasajeros;
            if (i === 0) {
                pasajeros = this.subir(this.pasajerosAleatorios());
                console.log("Parada " + (i + 1) + ": Suben " + pasajeros + " pasajeros");
            } else if (i === this.paradas - 1) {
                pasajeros = this.bajar(this.pasajerosActuales);
                console.log("Parada " + (i + 1) + ": Bajan todos los pasajeros");
            } else {
                pasajeros = this.bajar(this.pasajerosAleatorios());
                console.log("Parada " + (i + 1) + ": Bajan " + pasajeros + " pasajeros");
                pasajeros = this.subir(this.pasajerosAleatorios());
                console.log("Parada " + (i + 1) + ": Suben " + pasajeros + " pasajeros");
            }
        }
    };
}
                    
let autobus = new Autobus();

autobus.ruta();

console.log(autobus.totalDinero());
console.log(autobus.totalPasajerosSubidos());
