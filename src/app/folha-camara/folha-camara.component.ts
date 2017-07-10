import { Component, OnInit } from '@angular/core';

import { FolhaCamaraService, FolhaCamara, FolhaCamaraFilter } from '.';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { GtConfig } from '@angular-generic-table/core';

@Component({
  selector: 'app-folha-camara',
  templateUrl: './folha-camara.component.html',
  styleUrls: ['./folha-camara.component.scss']
})
export class FolhaCamaraComponent implements OnInit {

  public configObject: GtConfig<any>;
  public filter: FolhaCamaraFilter;
  public total: number;

  public constructor(private modal: Modal, private folhaCamaraService: FolhaCamaraService) {
    const date: Date = new Date();
    this.filter = {
      limit: 10,
      page: 1,
      ano: date.getUTCFullYear(),
      mes: date.getUTCMonth() + 1,
      nome: '',
      vinculo: '',
      cargo: ''
    }
    this.total = 0;

    this.configObject = {
      settings: [
        { objectKey: 'nome' },
        { objectKey: 'vinculo' },
        { objectKey: 'cargo' },
        { objectKey: 'remuneracaoFixa' },
        { objectKey: 'vantagensPessoais' }
      ],
      fields: [
        { name: 'Nome', objectKey: 'nome', classNames: 'clickable' },
        { name: 'Vínculo', objectKey: 'vinculo' },
        { name: 'Cargo', objectKey: 'cargo' },
        { name: 'Remuneração Fixa', objectKey: 'remuneracaoFixa' },
        { name: 'Vantagens Pessoais', objectKey: 'vantagensPessoais' }
      ],
      data: []
    }
  }

  public ngOnInit(): void {
    this.search(new Event('click'));
  }

  public search(event: Event): void {
    this.folhaCamaraService.search(this.filter).subscribe(
      (data: { total: number, result: Array<FolhaCamara> }) => {
        this.configObject.data = data.result;
        this.total = data.total;
        this.configObject.info = {
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
    if ('gt-page-changed-lazy' === event['name']) {
      this.filter.page = event['value']['pageCurrent'];
      this.search(new Event('click'));
    }
  }
}
