import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { UrlService } from '../shared/service';
import { ModalFrameComponent } from '../shared/component';

@Component({
  selector: 'app-mais-ricos-2',
  templateUrl: '../shared/component/modal-frame/modal-frame.component.html'
})
export class MaisRicos2Component extends ModalFrameComponent {

  public constructor(sanitizer: DomSanitizer) {
    super(sanitizer, 'analise-senado.html');
  }
}
