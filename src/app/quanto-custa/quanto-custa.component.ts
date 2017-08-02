import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ModalFrameComponent } from '../shared/component';

@Component({
  selector: 'app-quanto-custa',
  templateUrl: '../shared/component/modal-frame/modal-frame.component.html'
})
export class QuantoCustaComponent extends ModalFrameComponent {

  public constructor(protected sanitizer: DomSanitizer) {
    super(sanitizer, 'bars.html');
  }
}
