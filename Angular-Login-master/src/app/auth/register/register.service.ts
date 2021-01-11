import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  public register(reginfo: any) {
    return this.http.post('http://localhost:5080/register', reginfo);
  }
}
