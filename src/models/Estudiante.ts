import { Curso } from "./curso"

export class Estudiante {
    //propiedades de clase
    nombre: string
    apellidos?: string //opcional
    cursos: Curso[]
    private ID: string = '345'

    constructor(nombre:string, cursos: Curso[], apellidos?:string) {
        //inicializamos
        this.nombre = nombre
        this.cursos = cursos
        this.apellidos = apellidos? apellidos: undefined
    }

    get horasEstudiadas () {
        let horasEstudiadas = 0
        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += this.cursos.horas
        })
        return horasEstudiadas
    }

    // get ID_estudiante(): string {
    //     return this.ID
    // }

    
    setID_estudiante(id:string) {
        this.ID = id
    }
}

