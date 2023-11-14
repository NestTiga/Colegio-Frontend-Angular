import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoComponent } from './alumno.component';
import { AlumnosModule } from 'src/app/components/alumnos/alumnos.module';


@NgModule({
  declarations: [
    AlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    AlumnosModule
  ]
})
export class AlumnoModule { }
