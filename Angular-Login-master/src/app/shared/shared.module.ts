import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgxSpinnerModule } from 'ngx-spinner';

const importedAndExported = [
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  NgxSpinnerModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...importedAndExported],
  exports: [...importedAndExported],
  entryComponents: [],
  providers: []
})
export class SharedModule {}
