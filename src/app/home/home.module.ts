import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ModalPageModule, ModalPageComponent, ModalPageService } from './../modal-page';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    ModalPageModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [ModalPageService],
  entryComponents: [ModalPageComponent]
})
export class HomeModule { }
