import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {

  @ViewChild('loader') private loader: ElementRef;

  public show(): void {
    this.loader.nativeElement.hidden = false;
  }

  public hide(): void {
    this.loader.nativeElement.hidden = true;
  }

  public get visible(): boolean {
    return !this.loader.nativeElement.hidden;
  }

  public get hidden(): boolean {
    return this.loader.nativeElement.hidden;
  }
}
