import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ModalPageComponent, ModalPageDirective } from '.';
import { ComoComparaModule, ComoComparaComponent } from '../como-compara';
import { EquipeModule, EquipeComponent } from '../equipe';
import { FolhaModule, FolhaComponent } from '../folha';
import { MaisRicos1Module, MaisRicos1Component } from '../mais-ricos-1';
import { MaisRicos2Module, MaisRicos2Component } from '../mais-ricos-2';
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
    MaisRicos1Module,
    MaisRicos2Module,
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
    MaisRicos1Component,
    MaisRicos2Component,
    QuantoCustaComponent,
    SobreComponent
  ]
})
export class ModalPageModule { }
