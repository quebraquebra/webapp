import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GenericTableModule } from '@angular-generic-table/core';
import { FolhaCamaraComponent, FolhaCamaraService } from '.';
import { PerfilModule } from './perfil';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    GenericTableModule,
    PerfilModule
  ],
  declarations: [FolhaCamaraComponent],
  exports: [FolhaCamaraComponent],
  providers: [FolhaCamaraService]
})
export class FolhaCamaraModule { }
