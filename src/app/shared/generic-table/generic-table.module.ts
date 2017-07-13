import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericTableModule as GtModule } from '@angular-generic-table/core';
import { GenericTableComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    GtModule
  ],
  declarations: [GenericTableComponent],
  exports: [GenericTableComponent]
})
export class GenericTableModule { }
