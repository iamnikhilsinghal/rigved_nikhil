import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserListComponent } from './user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
];

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class UserListModule {}
