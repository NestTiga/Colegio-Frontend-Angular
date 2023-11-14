import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearAlumnosComponent } from './crear-alumnos/crear-alumnos.component';
import { MostrarAlumnosComponent } from './mostrar-alumnos/mostrar-alumnos.component';
import { EditarAlumnosComponent } from './editar-alumnos/editar-alumnos.component';
import { BotonesModule } from '../botones/botones.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearAlumnosComponent,
    MostrarAlumnosComponent,
    EditarAlumnosComponent
  ],
  imports: [
    CommonModule, BotonesModule, ReactiveFormsModule
  ],
  exports:[
    CrearAlumnosComponent,
    MostrarAlumnosComponent,
    EditarAlumnosComponent
  ]
})
export class AlumnosModule { }
