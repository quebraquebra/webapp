import { Component, Type } from '@angular/core';

import { FolhaCamaraService, FolhaCamara, FolhaCamaraFilter } from '.';
import { PerfilComponent } from './perfil';
import { GenericTableConfig } from '../shared/generic-table';

@Component({
  selector: 'app-folha-camara',
  templateUrl: './folha-camara.component.html',
  entryComponents: [PerfilComponent]
})
export class FolhaCamaraComponent {

  public filter: FolhaCamaraFilter;
  public gtConfig: GenericTableConfig;
  public gtRowComponent: Type<any> = PerfilComponent;

  public constructor(private folhaCamaraService: FolhaCamaraService) {
    const date: Date = new Date();
    this.filter = {
      limit: 10,
      page: 1,
      sort: 'nome',
      order: 'ASC',
      ano: date.getUTCFullYear(),
      mes: date.getUTCMonth() + 1,
      nome: '',
      vinculo: '',
      cargo: ''
    }

    this.gtConfig = {
      settings: [
        { objectKey: 'nome' },
        { objectKey: 'vinculo' },
        { objectKey: 'cargo' },
        { objectKey: 'remuneracaoFixa' },
        { objectKey: 'vantagensPessoais' }
      ],
      fields: [
        { name: 'Nome', objectKey: 'nome', classNames: 'clickable', expand: true },
        { name: 'Vínculo', objectKey: 'vinculo' },
        { name: 'Cargo', objectKey: 'cargo' },
        { name: 'Remuneração Fixa', objectKey: 'remuneracaoFixa' },
        { name: 'Vantagens Pessoais', objectKey: 'vantagensPessoais' }
      ],
      data: []
    }
  }
}
