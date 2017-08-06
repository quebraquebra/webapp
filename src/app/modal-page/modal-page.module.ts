import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ModalPageComponent, ModalPageDirective } from '.';
import { EquipeModule, EquipeComponent } from '../equipe';
import { FolhaModule, FolhaComponent } from '../folha';
import { SobreModule, SobreComponent } from '../sobre';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    EquipeModule,
    FolhaModule,
    SobreModule
  ],
  declarations: [
    ModalPageComponent,
    ModalPageDirective
  ],
  exports: [ModalPageComponent],
  entryComponents: [
    EquipeComponent,
    FolhaComponent,
    SobreComponent
  ]
})
export class ModalPageModule { }
