import { Component, OnInit, ViewChild } from '@angular/core';
import { UserListService } from './user-list.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ColsConfig } from './user-list.config';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public dataSource = new MatTableDataSource<any>();
  colsDef = ColsConfig;
  displayColumns: Array<string> = this.colsDef.map((item) => item.id);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private userListService: UserListService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.fetchUsers(1, 12);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // pagination(event) {
  //   console.log('event', event);
  //   this.fetchUsers(event.pageIndex + 1, event.pageSize);
  // }

  fetchUsers(page, per_page) {
    this.userListService.fetchUserList(page, per_page).subscribe((resp) => {
      this.spinner.hide();
      console.log('resp:', resp);
      this.dataSource.data = resp['data'];
    });
  }
}
