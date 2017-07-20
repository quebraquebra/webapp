import { Component, OnInit } from '@angular/core';

import { FolhaSenado } from '..';
import { GenericTableExpandedRow } from '../../shared/generic-table';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent extends GenericTableExpandedRow implements OnInit {

  public folhaSenado: FolhaSenado;

  public ngOnInit(): void {
    this.folhaSenado = this.row;
  }
}
