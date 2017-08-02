import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { UrlService } from '../shared/service';
import { ModalFrameComponent } from '../shared/util';

@Component({
  selector: 'app-publico-vs-privado',
  templateUrl: './publico-vs-privado.component.html'
})
export class PublicoVsPrivadoComponent extends ModalFrameComponent {

  public constructor(protected sanitizer: DomSanitizer) {
    super(sanitizer, 'analise-comparativa-senado.html');
  }
}
