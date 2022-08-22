import { Empleado, Jefe } from "./models/Persona"

let empleado1 = new Empleado('Erica', 'Arenas', 30, 2000)
let empleado2 = new Empleado('Maria', 'Perez', 35, 1500)
let empleado3 = new Empleado('Martin', 'San Jose', 45, 1800)
empleado1.saludar()

let jefe = new Jefe('Pablo','Garcia',50)
jefe.empleados.push(empleado1,empleado2,empleado3)
jefe.empleados.forEach(empleado => {
    empleado.saludar()
});

empleado1.saludar() //especificado en Empleado
jefe.saludar() //herencia de Persona