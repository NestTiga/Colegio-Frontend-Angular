import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumnos';
import { AlumnosService } from 'src/app/services/alumnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-alumnos',
  templateUrl: './mostrar-alumnos.component.html',
  styleUrls: ['./mostrar-alumnos.component.css']
})
export class MostrarAlumnosComponent implements OnInit {

  alumnos!: AlumnoModel[];

  constructor(
    public alumnosService:AlumnosService
  ) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() {
    this.alumnosService.getAlumnos().subscribe(
      (res: any) => {
        console.log('datos que llegan del back =>', res);
        this.alumnos = res;
      },
      (error: HttpErrorResponse) => {
        
        console.log(error);
      }
    );
  }

  EliminarAlumno(id:number){
    Swal.fire({
      title: 'Está seguro que desea eliminar los datos de este alumno?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below*/
      if (result.isConfirmed) {
        this.alumnosService.deleteAlumno(id).subscribe((res) => {
            Swal.fire({
              title: 'Datos del alumno eliminados correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
            this.getAlumnos();
        }, (error:HttpErrorResponse)=> {
          if(error.error.success==false){
            Swal.fire({
              title:error.error.info,
              icon: 'error',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
        );
      } else if (result.isDenied) {
        Swal.fire('No se eliminaron los datos del alumno!', '', 'info');
      }
    });
  }



}
