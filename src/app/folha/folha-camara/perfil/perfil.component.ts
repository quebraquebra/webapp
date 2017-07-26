import { Component, OnInit } from '@angular/core';

import { FolhaCamara } from '..';
import { GenericTableExpandedRow } from '../../../shared/generic-table';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent extends GenericTableExpandedRow implements OnInit {

  public folhaCamara: FolhaCamara;

  public ngOnInit(): void {
    this.folhaCamara = this.row;
  }
}
