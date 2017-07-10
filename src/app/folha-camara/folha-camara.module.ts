import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FolhaCamaraComponent, FolhaCamaraService } from '.';
import { GenericTableModule } from '@angular-generic-table/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    GenericTableModule
  ],
  declarations: [FolhaCamaraComponent],
  exports: [FolhaCamaraComponent],
  providers: [FolhaCamaraService]
})
export class FolhaCamaraModule { }
