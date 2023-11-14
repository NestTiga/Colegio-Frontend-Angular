import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent implements OnInit {

  myForm!: FormGroup;

  status!: boolean;

  
  constructor(
    public alumnosService: AlumnosService,
    private fb: FormBuilder
  ) { 
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(25)]],
      apellido: ['', [Validators.required, Validators.maxLength(25)]],
      cedula: ['', [Validators.required, Validators.maxLength(10)]],
      correo: ['', [Validators.email, Validators.maxLength(50)]],
      celular: ['', [Validators.required, Validators.maxLength(10)]],
      rol: ['Estudiante'],
      usuario: ['', [Validators.required, Validators.maxLength(50)]],
      contrasenia: ['', [Validators.required, Validators.maxLength(25)]],
      anioLectivo: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
  }


  addAlumno() {
    Swal.fire({
      title: 'Esta seguro que desea agregar al nuevo alumno?',
      showDenyButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('datos que se envian al back =>', this.myForm.value);
        this.alumnosService.postAlumno(this.myForm.value).subscribe((res) => {
            Swal.fire({
              title: 'Alumno agregado correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
            this.myForm.reset();
        });
      } else if (result.isDenied) {
        Swal.fire('No se agrego al nuevo alumno!', '', 'info');
      }
    });
  }

}
