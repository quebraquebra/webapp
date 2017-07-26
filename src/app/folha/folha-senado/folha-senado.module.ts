import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FolhaSenadoComponent, FolhaSenadoService } from '.';
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
  declarations: [FolhaSenadoComponent],
  exports: [FolhaSenadoComponent],
  providers: [FolhaSenadoService]
})
export class FolhaSenadoModule { }
