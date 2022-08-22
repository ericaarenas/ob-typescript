"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jefe = exports.Empleado = exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad) {
        //inicializamos
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`);
    }
}
exports.Persona = Persona;
class Empleado extends Persona {
    constructor(nombre, apellidos, edad, sueldo) {
        super(nombre, apellidos, edad);
        this.sueldo = sueldo;
    }
    saludar() {
        super.saludar();
        console.log(`Mi sueldo es de ${this.sueldo}`);
    }
}
exports.Empleado = Empleado;
class Jefe extends Persona {
    constructor(nombre, apellidos, edad) {
        super(nombre, apellidos, edad);
        this.empleados = [];
    }
}
exports.Jefe = Jefe;
//# sourceMappingURL=Persona.js.map