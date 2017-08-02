import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ModalFrameComponent } from '../shared/component';

@Component({
  selector: 'app-publico-vs-privado',
  templateUrl: '../shared/component/modal-frame/modal-frame.component.html'
})
export class PublicoVsPrivadoComponent extends ModalFrameComponent {

  public constructor(sanitizer: DomSanitizer) {
    super(sanitizer, 'analise-comparativa-senado.html');
  }
}
