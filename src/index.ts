import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils'
import { LISTA_CURSOS } from './mocks/cursos.mock'
import {Curso} from './models/curso'
import {Estudiante} from './models/Estudiante'
import { Empleado, Jefe } from './models/Persona'


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
// //while
// while (condition) {
    
// }
// //do while
// do {
    
// } while (condition);

/********************************************** */
/******************FUNCIONES******************* */
/********************************************** */

function saludar() {
    let nombre: string = 'Erica'
    console.log(`Hola, ${nombre}`)
}

function saludarPersona(nombre: string = 'Pepe') {
    console.log(`Hola, ${nombre}`)
}

function saludarOpcional(nombre?: string) {
    if(nombre) {
        console.log(`Hola, ${nombre}`)
    } else {
        console.log(`¡Hola!`)

    }
}

saludarPersona() //Hola, Pepe
saludarPersona('Erica') //Hola, Erica

function ejemploVariosTipos(a: string | number) {
    if(typeof(a) === 'string') {
        console.log("A es un string")
    } else if(typeof(a) === 'number') {
        console.log("A es un number")
    } else {
        console.log("A no es un string ni un number")
        throw Error('A no es string ni number')

    }
}
//funciones anonimas
let ejemploArrow = () => {}

function ejemploReturn(nombre:string, apellidos:string): string {
    return `${nombre} ${apellidos}`
}
const nombreCompleto = ejemploReturn('Erica', 'Arenas')
console.log(nombreCompleto) //ERica Arenas
console.log(ejemploReturn('Erica', 'Arenas')) //ERica Arenas

function ejemploMultipleParams(...nombres:string[]) {
    nombres.forEach(nombre => {
        console.log(nombre)
    })
    
}
ejemploMultipleParams('Erica')
ejemploMultipleParams('Erica', 'Pepe', 'Rafa')

const lista = ['Maria', 'Marta', 'Luis']

function ejemploParamLista(nombres:string[]):void {
    nombres.forEach(nombre => {
        console.log(nombre)
    })
    
}

ejemploParamLista(lista)
ejemploMultipleParams(...lista)

//Funciones asincronas
async function ejemploAsync(): Promise<string> {
    await console.log('Tarea a completar antes de seguir con la secuencia de instrucciones')
    console.log('Tarea completada')
    return 'Completado'
}

ejemploAsync().then((respuesta) => {
    console.log('Respuesta', respuesta)
}).catch((error) => {
    console.log('Ha ocurrido un error', error)
}).finally(() => 'Todo ha terminado')

//funciones generadores
function* ejemploGenerator() {
    // yield para emitir valores
    let index = 0
    while (index < 5) {
        //emitimos un valor incrementado
        yield index++
    }

}
//guardamos la funcion generadora en una variable
let generadora = ejemploGenerator()
//accedemos a los valores emitidos
console.log(generadora.next().value) //0
console.log(generadora.next().value) //1
console.log(generadora.next().value) //2
console.log(generadora.next().value) //3

//watcher
function* watcher(valor: number) {
    //llama al worker
    yield valor //emitimos el valor inicial
    yield* worker(valor) //llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4 //emitimos el valor final + 4
    
}
//Worker
function* worker(valor: number) {
    yield valor +1 
    yield valor +2 
    yield valor +3 //cada vez que nosotros llamemos al .next() la primera vez le sumará 1, la segunda 2, la teercera 3
}

let generatorSaga = watcher(0)

console.log(generatorSaga.next().value) //0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value) //1 (lo ha hecho el worker)
console.log(generatorSaga.next().value) //2 (lo ha hecho el worker)
console.log(generatorSaga.next().value) //3 (lo ha hecho el worker)
console.log(generatorSaga.next().value) //4 (lo ha hecho el watcher)

//Sobrecarga de funciones
//una misma funcion que haga diferentes operaciones
function mostrarError(error:string | number):void {
    console.log('Ha habido un error', error)    
}

/********************************************** */
/***********PERSISTENCIA DE DATOS************** */
/********************************************** */
// LocalStorage: almacena los datos en el navegador. Son persistidos. no se eliminan automáticamente
//SessionStorage: la diferencia radica en la sesión del navegador. Los datos se persisten en la sesión de navegador
//Cookies: tienen una fecha de caducidad y un ámbito de URL

//localStorage y sessionStorage

// function guardarEnLocalStorage():void {
//     localStorage.set('nombre', 'Erica')
    
// }
// function leerLocalStorage():void {
//     let nombre = localStorage.get('nombre')
    
// }
// npm i cookies-utils --save

//Cookies
const cookieOptions = {
    name: "usuario", // string,
    value: "Erica", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
   };
  setCookie(cookieOptions);
//leer cookie
let cookie = getCookieValue('usuario')
  //eliminar
  deleteCookie('usuario')
  //eliminar todas las cookies
  deleteAllCookies()


/********************************************** */
/******************EVENTOS********************* */
/********************************************** */
// clase temporizador

class Temporizador {
    public terminar?: (tiempo:number) => void
    public empezar(): void {
        setTimeout(() => {
            //Comprobamos que exista la función terminar como callback
            if(!this.terminar) return
            //cuando haya pasado el tiempo, se ejecutará la función terminar
            this.terminar(Date.now())
        }, 10000)
    }

}

const miTemporizador: Temporizador = new Temporizador()
//Definir la función del callback a ejecutar cuando termine el tiempo

miTemporizador.terminar = (tiempo:number) => {console.log('Evento terminado: ',tiempo)}

//lanzamos el temporaizador
miTemporizador.empezar() //se inicia el timeout y cuando termine se ejecuta la función terminar
setInterval(() => console.log('Tic'), 1000) //imprime tic cada segundo

//para eliminar la funcion terminar del stack de ejecución
delete miTemporizador.terminar

/********************************************** */
/**************CLASES Y OBJETOS**************** */
/********************************************** */

// const cursoTS: Curso = new Curso('TypeScript', 15)
// const cursoJS: Curso = new Curso('JavaScript', 20)

// const listaCurso: Curso[] = []
// listaCurso.push(cursoJS, cursoTS)
//usamos el MOCK

const listaCurso: Curso[] = LISTA_CURSOS
const erica: Estudiante = new Estudiante('Erica', listaCurso, 'Arenas')

console.log(`${erica.nombre} estudia:`)
erica.cursos.forEach(curso => {
    console.log(`- ${curso.nombre} (${curso.horas} horas)`)
})

//Saber la instancia de un objeto/variable
// instanceof(erica)
erica.setID_estudiante('890')

let fechaNacimiento = new Date(1984,6,18)
if(fechaNacimiento instanceof Date) {
    console.log("Es una instancia de Date")
}

/********************************************** */
/**********HERENCIA Y POLIMORFISMO************* */
/********************************************** */
let empleado1 = new Empleado('Erica', 'Arenas', 30, 2000)
let empleado2 = new Empleado('Maria', 'Perez', 35, 1500)
let empleado3 = new Empleado('Martin', 'San Jose', 45, 1800)
empleado1.saludar()

let jefe = new Jefe('Pablo','Garcia',50)
jefe.empleados.push(empleado1,empleado2,empleado3)
jefe.empleados.forEach(empleado => {
    empleado.saludar()
});