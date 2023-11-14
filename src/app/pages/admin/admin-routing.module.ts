import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlRutasRolGuard } from 'src/app/Guards/control-rutas-rol.guard';

const routes: Routes = [
  {
    path: 'alumnos',
    loadChildren: () =>
      import('../components/alumno/alumno.module').then(
        (m) => m.AlumnoModule
      ),
      data:{
        expectedRole:'Estudiante'
      },
      canActivate:[ControlRutasRolGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
