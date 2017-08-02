import { ElementRef, ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { LoaderComponent } from '../../loader';
import { UrlService } from '../service';

export enum FrameStatus {

  NOT_INITIALIZED,
  LOADING,
  LOADED
}

export abstract class ModalFrameComponent {

  protected frameStatus: FrameStatus = FrameStatus.NOT_INITIALIZED;
  private _frameUrl: SafeResourceUrl;

  @ViewChild('frame') protected frame: ElementRef;
  @ViewChild('loader') protected loader: LoaderComponent;

  public constructor(protected sanitizer: DomSanitizer, frameUrl: string) {
    this._frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(UrlService.mountGraficosUrl(frameUrl));
  }

  public loadFrame(frame: ElementRef, loader: LoaderComponent): void {
    switch (this.frameStatus) {
      case FrameStatus.NOT_INITIALIZED:
        this.frameStatus = FrameStatus.LOADING;
        this.frame.nativeElement.hidden = true;
        this.loader.show();
        return;
      case FrameStatus.LOADING:
        this.frameStatus = FrameStatus.LOADED;
        this.frame.nativeElement.hidden = false;
        this.loader.hide();
    }
  }

  public get frameUrl(): SafeResourceUrl {
    return this._frameUrl;
  }
}
