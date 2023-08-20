import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoggeadoGuard implements CanActivate {

  constructor(private _storage: StorageService, private router: Router){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const user = this._storage.load('user' , null);

    if(user){
      return true;
    }else {
      this.router.navigate(['/login/sign-in'])
      return false;
    }
  }
  
  //Si Inicio Sesion
}
