import { Injectable, Type } from '@angular/core';

import { ModalPage } from '.';
import { FolhaCamaraComponent } from '../folha-camara';
import { SobreComponent } from '../sobre';

@Injectable()
export class ModalPageService {

  private _components: Type<any>[];
  private _page: ModalPage;

  public constructor() {
    this._components = [];
    this._components[ModalPage.FOLHA_CAMARA] = FolhaCamaraComponent;
    this._components[ModalPage.SOBRE] = SobreComponent;
  }

  public get component(): Type<any> {
    return this._components[this._page];
  }

  public get page(): ModalPage {
    return this._page;
  }

  public set page(value: ModalPage) {
    this._page = value;
  }
}
