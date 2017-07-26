import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FolhaCamaraComponent, FolhaCamaraService } from '.';
import { GenericTableModule } from '../../shared/generic-table';
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
