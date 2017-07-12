import { Component, OnInit, Type, ViewChild } from '@angular/core';

import { FolhaCamaraService, FolhaCamara, FolhaCamaraFilter } from '.';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { GenericTableComponent, GtConfig, GtTexts } from '@angular-generic-table/core';
import { gtTexts } from '../shared/util/angular-generic-table';
import { PerfilComponent } from './perfil';

@Component({
  selector: 'app-folha-camara',
  templateUrl: './folha-camara.component.html',
  styleUrls: ['./folha-camara.component.scss'],
  entryComponents: [PerfilComponent]
})
export class FolhaCamaraComponent {

  public filter: FolhaCamaraFilter;
  public gtConfig: GtConfig<any>;
  public gtRowComponent: Type<any> = PerfilComponent;
  public gtTexts: GtTexts;
  public total: number;

  @ViewChild('folhaCamaraTable') public folhaCamaraTable: GenericTableComponent<any, PerfilComponent>;

  public constructor(private modal: Modal, private folhaCamaraService: FolhaCamaraService) {
    const date: Date = new Date();
    this.filter = {
      limit: 10,
      page: 1,
      order: '',
      ano: date.getUTCFullYear(),
      mes: date.getUTCMonth() + 1,
      nome: '',
      vinculo: '',
      cargo: ''
    }
    this.total = 0;
    this.gtTexts = gtTexts['pt-BR'];

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

  public search(event: Event): void {
    this.folhaCamaraTable.loading = true;

    this.folhaCamaraService.search(this.filter).subscribe(
      (data: { total: number, result: Array<FolhaCamara> }) => {
        this.gtConfig.data = data.result;
        this.total = data.total;
        this.gtConfig.info = {
          pageCurrent: this.filter.page,
          recordLength: this.filter.limit,
          recordsAll: data.total,
          recordsAfterFilter: data.total,
          recordsAfterSearch: data.total
        }
      }
    );

    event.preventDefault();
  }

  public onTableEvent(event: Event): void {
    switch (event['name']) {
      case 'gt-page-changed-lazy':
        this.filter.page = event['value']['pageCurrent'];
        this.search(new Event('click'));
        break;
      case 'gt-sorting-applied':
        this.filter.order = event['value'][0];
        this.search(new Event('click'));
    }
  }
}
