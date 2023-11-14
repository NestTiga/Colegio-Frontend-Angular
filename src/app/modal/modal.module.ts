import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditModalComponent } from './add-edit-modal/add-edit-modal.component';
import { RouterModule } from '@angular/router';
import { AlumnosModule } from '../components/alumnos/alumnos.module';


@NgModule({
  declarations: [AddEditModalComponent],
  imports: [CommonModule, RouterModule.forChild([]), AlumnosModule],
  exports: [AddEditModalComponent],
})
export class ModalModule {}
