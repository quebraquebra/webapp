import {
  AfterViewInit, Component, AfterViewChecked, ComponentFactoryResolver, OnDestroy, Type, ViewChild, ChangeDetectorRef
} from '@angular/core';

import { ModalPageService, ModalPageDirective } from '.';
import { DialogRef } from 'angular2-modal';
import { SobreComponent } from '../sobre/sobre.component';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html'
})
export class ModalPageComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild(ModalPageDirective) appHost: ModalPageDirective;

  public constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private dialog: DialogRef<any>,
    private modalPageService: ModalPageService
  ) {
    dialog.setCloseGuard(this);
  }

  public ngAfterViewInit(): void {
    this.loadComponent();
  }

  public ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  public closeDialog(event: Event): void {
    this.dialog.close();

    event.preventDefault();
  }

  private loadComponent(): void {
    const component: Type<any> = this.modalPageService.component;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.appHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
