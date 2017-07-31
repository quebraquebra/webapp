import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { UrlService } from '../shared/service';

@Component({
  selector: 'app-mais-ricos-2',
  templateUrl: './mais-ricos-2.component.html'
})
export class MaisRicos2Component {

  private _frameUrl: SafeResourceUrl;

  public constructor(private sanitizer: DomSanitizer) {
    this._frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(UrlService.mountGraficosUrl('analise-senado.html'));
  }

  public get frameUrl(): SafeResourceUrl {
    return this._frameUrl;
  }
}
