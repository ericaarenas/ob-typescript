import { doesNotMatch } from "assert"

console.log('Hola')

let lista = ['Uno', 'Dos', 'Tres']
lista.forEach((_) => console.log)

let nombre = 'Erica'
console.log(`Hola ${nombre}`)

console.clear()
let a:number = 100

console.assert(a === 100, "Mensaje", `Otro mensaje: ${a}`)

function contador(texto:string) {
    console.count(texto)
    
}
contador('Hola') //1
contador('Adios') //1
contador('Hola') //2
console.countReset() //resto del contador

console.info('Texto informativo')
console.warn('Texto aviso')
console.error('Error')

//console trace

function uno() {
    dos()
}
function dos() {
    tres()
}
function tres() {
    console.trace() //trazar por donde se ha ido ejecutando para llegar a este punto
}
uno() //uinicia el trace


let coche = {
    nombre: 'Audi',
    precio: 45000,
    matricula: '4572FHR',
    anio: 2010,
    especificaciones: {
        motor: 'v12',
        potencia: '300CV'
    }
}
console.dir(coche)
//console tble - mostrr bjeto o listas en tablas
console.table(coche)
//console.time() - contabiliza el tiempo de ejecución
//console.timeEnd()

//agrupacioens de console
console.group('Numeros')
console.group('1')
console.group('2')
console.group('3')
console.groupEnd()