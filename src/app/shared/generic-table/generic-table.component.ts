import { Component, Type, Input, ViewChild } from '@angular/core';

import { GenericTableComponent as GtComponent, GtConfig, GtTexts } from '@angular-generic-table/core';
import { GenericTableExpandedRow, GenericTableService, GenericTableFilter, GenericTableConfig, GenericTableData, gtTexts } from '.';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html'
})
export class GenericTableComponent<GtExpandedRow extends GenericTableExpandedRow> {

  public gtTexts: GtTexts;
  public total: number;

  @Input() public filter: GenericTableFilter;
  @Input() public gtConfig: GenericTableConfig;
  @Input() public gtRowComponent: Type<any>;
  @Input() public service: GenericTableService;

  @ViewChild('genericTable') public genericTable: GtComponent<any, GtExpandedRow>;

  public constructor() {
    this.gtTexts = gtTexts['pt-BR'];
    this.total = 0;
  }

  public search($event?: Event): void {
    this.genericTable.loading = true;

    this.service.search(this.filter).subscribe(
      (data: { total: number, result: Array<GenericTableData> }) => {
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

    if ($event) {
      $event.preventDefault();
    }
  }

  public onTableEvent(event: { name: string, value: any }): void {
    switch (event.name) {
      case 'gt-page-changed-lazy':
        this.onPageChangedLazy(event.value);
        break;
      case 'gt-sorting-applied':
        this.onSortingApplied(event.value);
    }
  }

  private onPageChangedLazy(value: { pageCurrent: number, recordLength: number}): void {
    this.filter.page = value.pageCurrent;
    this.search();
  }

  private onSortingApplied(value: Array<string>): void {
    const pattern: RegExp = new RegExp(/^-?([\w]+)$/);
    this.filter.order = value[0].startsWith('-') ? 'DESC' : 'ASC';
    this.filter.sort = pattern.exec(value[0])[1];
    this.filter.page = 1;
    this.search();
  }
}
