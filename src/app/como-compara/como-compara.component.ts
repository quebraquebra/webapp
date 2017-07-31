import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { UrlService } from '../shared/service';

@Component({
  selector: 'app-como-compara',
  templateUrl: './como-compara.component.html'
})
export class ComoComparaComponent {

  private _frameUrl: SafeResourceUrl;

  public constructor(private sanitizer: DomSanitizer) {
    this._frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(UrlService.mountGraficosUrl('analise-comparativa-senado.html'));
  }

  public get frameUrl(): SafeResourceUrl {
    return this._frameUrl;
  }
}
