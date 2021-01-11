import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;
  subscription;
  userName: string;
  constructor(private authService: AuthService) {
    this.subscription = this.authService.userUpdated.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit() {
    let info = localStorage.getItem('Info');
    info = JSON.parse(info);

    if (info && info['UserName']) {
      this.userName = info['UserName'];
    }
  }

  logout() {
    this.authService.logout();
  }
}
