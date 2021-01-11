import { Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route, segments): Observable<boolean> | Promise<boolean> | boolean {
    let crs: any = localStorage.getItem('crs');
    crs = JSON.parse(crs);
    if (crs && crs.user && crs.user.token) {
      console.log('authentication check passed');
      return true;
    } else {
      console.log('Authentication check failed.');
      this.router.navigate(['auth', 'register']);
      return false;
    }
  }
}
