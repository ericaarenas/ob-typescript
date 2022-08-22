"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    constructor(nombre, cursos, apellidos) {
        this.ID = '345';
        //inicializamos
        this.nombre = nombre;
        this.cursos = cursos;
        this.apellidos = apellidos ? apellidos : undefined;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    // get ID_estudiante(): string {
    //     return this.ID
    // }
    setID_estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map