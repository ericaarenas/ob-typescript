console.log('Hola Typescript')
console.log('Hola Erica')

//Declaración de variables
var nombre: string = 'Martin'
const PI: number = 3.1416
var error: boolean = false
console.log('Hola, ' + nombre)
console.log(`¿Cómo han ido las vacaciones, ${nombre}?`)

//instaciación multible
let a:string, b:boolean, c:number //instancia 3 variables sin valor inicial
a = "Typescript"
b = false
c = 8.9

// BuiltIn Types: number, string, boolean, void, null y undefined

let listaTareas: string[] = ['Tarea 1', 'Tarea 2']
//tipos en listas
let valores: (string | number | boolean) []= [false, 'Hola', true, 56]
//enumerados
enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P",
}
enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}
let estadoTarea: Estados = Estados.Completado
let puestoCarrera: PuestoCarrera = PuestoCarrera.Segundo

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}
//podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}
console.log(`Tarea: ${tarea1.nombre}`)

//Asignación multiple de variables
//declaración 1 a 1
let miTarea = {
    titulo: "Mi tarea",
    estado: Estados.Completado,
    urgencia: 1
}
//Declaración con factor de propagación
let {titulo, estado, urgencia} = miTarea
// en listas
let listaCompraLunes: string[] = ['Leche', 'Patatas']
let listaCompraMartes: string[] = [...listaCompraLunes, 'Pan', 'Huevos']
let listaCompraMiercoless: string[] = ["Carne", 'Bolis']
let listaCompraSemana: string[] = [...listaCompraMartes, ...listaCompraMartes]
//En objetos

let estadoApp = {
    usuario: 'admin',
    session: 3,
    jwt: 'Bearer49359023485'
}
//cambiar un valor por propagación
let nuevoEstado = {
    ...estadoApp,
    session: 4
}

//Types en TypeScript
//es para definir algo más complejo que una interface
//conjuntos de datos primitivos que queremos ampliar
type Producto = {
    nombre: string
    precio: number,
    anio: number
}
let coche: Producto = {
    nombre: 'Audi',
    precio: 45000,
    anio: 2010
}
// ** condicionales
//operaciones ternarias
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo`:`Coche: ${coche.nombre} es nuevo`)
//If - else
if (error) {
    console.log("Hay un error")
} else { 
    console.log("No hay un error")
}

//Switch

switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta completada")
        break;
    case Estados.Incompleto:
        console.log("La tarea no esta completada")
        break;
    case Estados.Pendiente:
        console.log("La tarea está pendiente")
        break;
    default:
        break;
}

// ** Bucles
//foreach
let listaTareasNuevas: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
]
listaTareasNuevas.forEach((tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre}`)
})

//for clasico
//for in SUELE SER PARA STRINGS,
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
//while
while (condition) {
    
}
//do while
do {
    
} while (condition);

