import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolhaComponent } from '.';
import { FolhaCamaraModule } from './folha-camara';
import { FolhaSenadoModule } from './folha-senado';

@NgModule({
  imports: [
    CommonModule,
    FolhaCamaraModule,
    FolhaSenadoModule
  ],
  declarations: [FolhaComponent],
  exports: [FolhaComponent]
})
export class FolhaModule { }
