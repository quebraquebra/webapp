import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { UrlService } from '../shared/service';

@Component({
  selector: 'app-mais-ricos-1',
  templateUrl: './mais-ricos-1.component.html'
})
export class MaisRicos1Component {

  private _frameUrl: SafeResourceUrl;

  public constructor(private sanitizer: DomSanitizer) {
    this._frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(UrlService.mountD3Url('presidents.html'));
  }

  public get frameUrl(): SafeResourceUrl {
    return this._frameUrl;
  }
}
