export interface AlumnoModel {
    id:          number;
    nombre:      string;
    apellido:    string;
    cedula:      string;
    correo:      string;
    celular:     string;
    rol:         string;
    usuario:     string;
    contrasenia: string;
    anioLectivo: string;
    
}

export interface nuevoAlumno {
    nombre:      string;
    apellido:    string;
    cedula:      string;
    correo:      string;
    celular:     string;
    rol:         string;
    usuario:     string;
    contrasenia: string;
    anioLectivo: string;
    
}

export interface DataFormAlumno {
    formulario: string;
    title: string;
    data: AlumnoModel;
  }