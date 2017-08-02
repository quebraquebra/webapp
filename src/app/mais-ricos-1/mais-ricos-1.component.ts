import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ModalFrameComponent } from '../shared/component';

@Component({
  selector: 'app-mais-ricos-1',
  templateUrl: '../shared/component/modal-frame/modal-frame.component.html'
})
export class MaisRicos1Component extends ModalFrameComponent {

  public constructor(sanitizer: DomSanitizer) {
    super(sanitizer, 'presidents.html');
  }
}
