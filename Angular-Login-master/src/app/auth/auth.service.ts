import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
// import { NgxSpinnerService } from 'ngx-spinner';

export interface User {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUpdated = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
    let crs: any = localStorage.getItem('crs');
    crs = JSON.parse(crs);
    if (crs && crs.user) {
      this.userUpdated.next(crs.user);
    } else {
      this.userUpdated.next(null);
    }
  }

  login({ email = null, password = null }): Observable<any> {
    return this.http.post(`https://reqres.in/api/login`, {
      email,
      password
    });
  }

  logout() {
    this.spinner.show();
    //call logout API
    localStorage.removeItem('crs');
    this.userUpdated.next(null);
    window.location.reload();
  }
}
