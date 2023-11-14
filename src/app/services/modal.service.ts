import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from 'config/config';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { DataFormAlumno } from '../models/alumnos';


const initAlumno: DataFormAlumno = {
  formulario: '',
  title:'',
  data: {
    id:          0,
    nombre:      '',
    apellido:    '',
    cedula:      '',
    correo:      '',
    celular:     '',
    rol: '',
    usuario:     '',
    contrasenia: '',
    anioLectivo: '',
  },
};

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  //Behaviors Subjects
  private formAlumno$ = new BehaviorSubject<DataFormAlumno>(initAlumno);
  constructor() {}

  // Alumnos

  // Obtener los valores del observable para los datos de los alumnos
  get selectFromAlumno$(): Observable<DataFormAlumno> {
    return this.formAlumno$.asObservable();
  }

  // Guardar los valores del observable para los datos de los alumnos
  setForAlumno(data: DataFormAlumno) {
    this.formAlumno$.next(data);
  }

  //Funciones Modal

  openModal() {
    let modalGeneral = document.getElementById('modalGeneral') as any;
    if (modalGeneral) {
      modalGeneral.style.display = 'block';
      modalGeneral.classList.add('show');
      modalGeneral.style.backgroundColor = 'rgba(0,0,0,0.5)';
      setTimeout(() => {
        if (modalGeneral) {
          modalGeneral.style.opacity = 1;
        }
      }); //FOR TRANSITION
    }
  }

  closeModal() {
    let modalGeneral = document.getElementById('modalGeneral') as any;

    if (modalGeneral) {
      modalGeneral.style.display = 'none';
      modalGeneral.classList.remove('show');
      modalGeneral.style.opacity = 1;
    }
  }
}
