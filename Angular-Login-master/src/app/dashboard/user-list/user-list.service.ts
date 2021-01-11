import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  fetchUserList(page, per_page) {
    this.spinner.show();
    return this.http.get(
      `https://reqres.in/api/users?page=${page}&per_page=${per_page}`
    );
  }
}
