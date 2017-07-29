import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ModalPageComponent, ModalPageDirective } from '.';
import { ComoComparaModule, ComoComparaComponent } from '../como-compara';
import { EquipeModule, EquipeComponent } from '../equipe';
import { FolhaModule, FolhaComponent } from '../folha';
import { MaisRicosModule, MaisRicosComponent } from '../mais-ricos';
import { QuantoCustaModule, QuantoCustaComponent } from '../quanto-custa';
import { SobreModule, SobreComponent } from '../sobre';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    ComoComparaModule,
    EquipeModule,
    FolhaModule,
    MaisRicosModule,
    QuantoCustaModule,
    SobreModule
  ],
  declarations: [
    ModalPageComponent,
    ModalPageDirective
  ],
  exports: [ModalPageComponent],
  entryComponents: [
    ComoComparaComponent,
    EquipeComponent,
    FolhaComponent,
    MaisRicosComponent,
    QuantoCustaComponent,
    SobreComponent
  ]
})
export class ModalPageModule { }
