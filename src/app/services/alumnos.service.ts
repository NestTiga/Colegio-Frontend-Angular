import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';
import { AlumnoModel, nuevoAlumno } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private URL_API: string = config.URL_BASE + '/api/alumnos';

  constructor(private http: HttpClient) {}

  getAlumnos() {
    return this.http.get<AlumnoModel>(this.URL_API);
  }

  postAlumno(alumnoDatos: nuevoAlumno) {
    return this.http.post<nuevoAlumno>(this.URL_API, alumnoDatos);
  }

  deleteAlumno(id: number) {
    return this.http.delete<AlumnoModel>(this.URL_API + '/' + id);
  }

}
