import { Component, OnInit } from '@angular/core';

import { GtExpandedRow } from '@angular-generic-table/core';
import { FolhaCamara } from '..';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent extends GtExpandedRow<any> implements OnInit {

  public folhaCamara: FolhaCamara;

  public ngOnInit(): void {
    this.folhaCamara = this.row;
  }
}
