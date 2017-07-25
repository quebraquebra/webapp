import { Component } from '@angular/core';

import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalPageComponent, ModalPageService, ModalPage } from '../modal-page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [Modal]
})
export class HomeComponent {

  public modalPage = ModalPage;

  public constructor(
    private modal: Modal,
    private modalPageService: ModalPageService
  ) { }

  public openModal(modalPage: ModalPage, event: Event): void {
    this.modalPageService.page = modalPage;
    this.modal.open(ModalPageComponent, overlayConfigFactory(null, BSModalContext));

    event.preventDefault();
  }
}
