"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./models/Persona");
let empleado1 = new Persona_1.Empleado('Erica', 'Arenas', 30, 2000);
let empleado2 = new Persona_1.Empleado('Maria', 'Perez', 35, 1500);
let empleado3 = new Persona_1.Empleado('Martin', 'San Jose', 45, 1800);
empleado1.saludar();
let jefe = new Persona_1.Jefe('Pablo', 'Garcia', 50);
jefe.empleados.push(empleado1, empleado2, empleado3);
jefe.empleados.forEach(empleado => {
    empleado.saludar();
});
empleado1.saludar(); //especificado en Empleado
jefe.saludar(); //herencia de Persona
//# sourceMappingURL=index.js.map