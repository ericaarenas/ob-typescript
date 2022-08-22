"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // se crea la unica intancia compartida a nivel de app
        }
        return Singleton.instance;
    }
    mostrarPorConsola() {
        console.log('Método de Singleton');
    }
}
//# sourceMappingURL=Singleton.js.map