import { Component, Type } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { FolhaSenadoService, FolhaSenado, FolhaSenadoFilter } from '.';
import { PerfilComponent } from './perfil';
import { GenericTableConfig } from '../shared/generic-table';
import { quantidadesRegistros, anos, meses } from '../shared/util/filter';

@Component({
  selector: 'app-folha-senado',
  templateUrl: './folha-senado.component.html',
  providers: [DecimalPipe],
  entryComponents: [PerfilComponent]
})
export class FolhaSenadoComponent {

  public anos: Array<number>;
  public meses: { [valor: number]: string};
  public quantidadesRegistros: Array<number>;
  public filter: FolhaSenadoFilter;
  public gtConfig: GenericTableConfig;
  public gtRowComponent: Type<any> = PerfilComponent;
  public object = Object;

  public constructor(public folhaSenadoService: FolhaSenadoService, private decimalPipe: DecimalPipe) {
    this.anos = anos;
    this.meses = meses;
    this.quantidadesRegistros = quantidadesRegistros;

    const date: Date = new Date();
    this.filter = {
      limit: 10,
      page: 1,
      sort: 'servidor',
      order: 'ASC',
      ano: '',
      mes: '',
      servidor: '',
      vinculo: '',
      cargo: ''
    }

    this.gtConfig = {
      settings: [
        { objectKey: 'servidor' },
        { objectKey: 'ano' },
        { objectKey: 'mes' },
        { objectKey: 'vinculo' },
        { objectKey: 'cargo' },
        { objectKey: 'tipo' },
        { objectKey: 'remuneracaoBasica' },
        { objectKey: 'vantagensPessoais' }
      ],
      fields: [
        { name: 'Servidor', objectKey: 'servidor', classNames: 'clickable', expand: true },
        { name: 'Ano', objectKey: 'ano' },
        { name: 'Mês', objectKey: 'mes' },
        { name: 'Vínculo', objectKey: 'vinculo' },
        { name: 'Cargo', objectKey: 'cargo' },
        { name: 'Tipo de Folha', objectKey: 'tipo' },
        {
          name: 'Remuneração Básica',
          objectKey: 'remuneracaoBasica',
          classNames: 'text-right',
          render: (row: FolhaSenado) => this.decimalPipe.transform(row.remuneracaoBasica, '1.2-2')
        },
        {
          name: 'Vantagens Pessoais',
          objectKey: 'vantagensPessoais',
          classNames: 'text-right',
          render: (row: FolhaSenado) => this.decimalPipe.transform(row.vantagensPessoais, '1.2-2')
        }
      ],
      data: []
    }
  }
}
