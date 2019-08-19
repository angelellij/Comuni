import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NologinGuard implements CanActivate {
  constructor(private AFguard:AngularFireAuth, private router:Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

     return this.AFguard.authState.pipe( map ( auth=> {
        if (!isNullOrUndefined(auth)){
          this.router.navigate(['tabs']);
          return false;
        } 
        else{
          return true;
        }
      }))
  }
}
