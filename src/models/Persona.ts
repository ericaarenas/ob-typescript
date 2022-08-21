export class Persona {
    nombre:string
    apellidos:string
    edad:number

    constructor(nombre:string, apellidos:string, edad:number) {
        //inicializamos
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
    }

    saludar():void {
        console.log(`Hola, soy ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`)
    }
}

export class Empleado extends Persona {
    sueldo: number

    constructor(nombre:string, apellidos:string, edad:number, sueldo:number) {
        super(nombre, apellidos, edad)
        this.sueldo = sueldo
    }

    saludar():void {
        super.saludar()
        console.log(`Mi sueldo es de ${this.sueldo}`)
    }
}

export class Jefe extends Persona {
    empleados: Empleado[] = []

    constructor(nombre:string, apellidos:string, edad:number) {
        super(nombre, apellidos, edad)
        
    }
}