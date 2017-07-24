import { Component, Type } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { FolhaCamaraService, FolhaCamara, FolhaCamaraFilter } from '.';
import { PerfilComponent } from './perfil';
import { GenericTableConfig } from '../shared/generic-table';
import { quantidadesRegistros, anos, meses } from '../shared/util/filter';

@Component({
  selector: 'app-folha-camara',
  templateUrl: './folha-camara.component.html',
  providers: [DecimalPipe],
  entryComponents: [PerfilComponent]
})
export class FolhaCamaraComponent {

  public anos: Array<number>;
  public meses: { [valor: number]: string};
  public quantidadesRegistros: Array<number>;
  public filter: FolhaCamaraFilter;
  public gtConfig: GenericTableConfig;
  public gtRowComponent: Type<any> = PerfilComponent;
  public object = Object;

  public constructor(public folhaCamaraService: FolhaCamaraService, private decimalPipe: DecimalPipe) {
    this.anos = anos;
    this.meses = meses;
    this.quantidadesRegistros = quantidadesRegistros;

    const date: Date = new Date();
    this.filter = {
      limit: 10,
      page: 1,
      sort: 'nome',
      order: 'ASC',
      ano: '',
      mes: '',
      nome: '',
      vinculo: '',
      cargo: ''
    }

    this.gtConfig = {
      settings: [
        { objectKey: 'nome' },
        { objectKey: 'ano' },
        { objectKey: 'mes' },
        { objectKey: 'vinculo' },
        { objectKey: 'cargo' },
        { objectKey: 'remuneracaoFixa' },
        { objectKey: 'vantagensPessoais' }
      ],
      fields: [
        { name: 'Nome', objectKey: 'nome', classNames: 'clickable', expand: true },
        { name: 'Ano', objectKey: 'ano' },
        { name: 'Mês', objectKey: 'mes' },
        { name: 'Vínculo', objectKey: 'vinculo' },
        { name: 'Cargo', objectKey: 'cargo' },
        {
          name: 'Remuneração Fixa',
          objectKey: 'remuneracaoFixa',
          classNames: 'text-right',
          render: (row: FolhaCamara) => this.decimalPipe.transform(row.remuneracaoFixa, '1.2-2')
        },
        {
          name: 'Vantagens Pessoais',
          objectKey: 'vantagensPessoais',
          classNames: 'text-right',
          render: (row: FolhaCamara) => this.decimalPipe.transform(row.vantagensPessoais, '1.2-2')
        }
      ],
      data: []
    }
  }
}
