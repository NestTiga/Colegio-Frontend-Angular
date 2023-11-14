import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ControlRutasRolGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ){ }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole= (route.data['expectedRole']);
    const token = (localStorage.getItem('token') as string);
    const datos:{id_empleado: any,sub: any}= decode(token);
    console.log('datos que vienen en el token',decode(token));
    console.log('se permite ingreso solo a este rol', expectedRole);
    console.log('rol obtenido del token', datos.sub);
    console.log('supuesto id de usuario', datos.id_empleado);
    if(!this.loginService.isAuth() || datos.sub !== expectedRole ){
      console.log('usuario no autorizado');
      return false;
    }
   
    return true;
  }
  
}
