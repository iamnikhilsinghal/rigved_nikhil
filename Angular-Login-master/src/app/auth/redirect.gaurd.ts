import { Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RedirectGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route, segments): Observable<boolean> | Promise<boolean> | boolean {
    let crs: any = localStorage.getItem('crs');
    crs = JSON.parse(crs);
    if (crs && crs.user && crs.user.token) {
      console.log('authentication check passed');
      this.router.navigate(['/']);
    } else {
      return true;
    }
  }
}
