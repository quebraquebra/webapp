import { Component } from '@angular/core';

import { Folha } from '.';

@Component({
  selector: 'app-folha',
  templateUrl: './folha.component.html'
})
export class FolhaComponent {

  private _folhaSelecionada: Folha;

  public get folha(): Object {
    return Folha;
  }

  public get folhaSelecionada(): Folha {
    return this._folhaSelecionada;
  }

  public set folhaSelecionada(value: Folha) {
    this._folhaSelecionada = value;
  }
}
