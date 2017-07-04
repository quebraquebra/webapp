import { Component, OnInit } from '@angular/core';

import { FolhaCamaraService, FolhaCamara } from '.';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-folha-camara',
  templateUrl: './folha-camara.component.html',
  styleUrls: ['./folha-camara.component.scss']
})
export class FolhaCamaraComponent implements OnInit {

  public rows: any[] = [];
  public columns: any[] = [
    { title: 'Nome', name: 'nome', sort: 'asc', filtering: { filterString: '', placeholder: 'Filtrar por nome' } },
    { title: 'Vínculo', name: 'vinculo', sort: false },
    { title: 'Cargo', name: 'cargo' },
    { title: 'Remuneração Fixa', name: 'remuneracaoFixa', sort: '' },
    { title: 'Vantagens Pessoais', name: 'vantagensPessoais' }
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  private data: Array<FolhaCamara> = [];

  public constructor(private modal: Modal, private folhaCamaraService: FolhaCamaraService) {
    this.length = this.data.length;
  }

  public ngOnInit(): void {
    this.folhaCamaraService.search().subscribe((folhas: Array<FolhaCamara>) => {
      this.data = folhas;
      this.onChangeTable(this.config);
    });
  }

  public changePage(page: any, data: Array<FolhaCamara> = this.data): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;

    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray: any[] = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}
