import { Injectable, Type } from '@angular/core';

import { ModalPage } from '.';
import { ComoComparaComponent } from '../como-compara';
import { EquipeComponent } from '../equipe';
import { FolhaComponent } from '../folha';
import { MaisRicosComponent } from '../mais-ricos';
import { QuantoCustaComponent } from '../quanto-custa';
import { SobreComponent } from '../sobre';

@Injectable()
export class ModalPageService {

  private _components: Array<Type<any>>;
  private _page: ModalPage;

  public constructor() {
    this._components = [];
    this._components[ModalPage.COMO_COMPARA] = ComoComparaComponent;
    this._components[ModalPage.EQUIPE] = EquipeComponent;
    this._components[ModalPage.FOLHA] = FolhaComponent;
    this._components[ModalPage.MAIS_RICOS] = MaisRicosComponent;
    this._components[ModalPage.QUANTO_CUSTA] = QuantoCustaComponent;
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
