import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterService } from './register/register.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [ RegisterComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  providers: [RegisterService]
})
export class AuthModule {}
