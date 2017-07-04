import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModalPage]',
})
export class ModalPageDirective {

  public constructor(public viewContainerRef: ViewContainerRef) { }
}
