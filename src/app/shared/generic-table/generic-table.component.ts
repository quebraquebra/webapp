import { Component, Type, Input, ViewChild, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { GenericTableComponent as GtComponent, GtConfig, GtTexts } from '@angular-generic-table/core';
import { GenericTableExpandedRow, GenericTableService, GenericTableFilter, GenericTableConfig, GenericTableData, gtTexts } from '.';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html'
})
export class GenericTableComponent<GtExpandedRow extends GenericTableExpandedRow> implements OnInit {

  public errorMessage: string;
  public gtTexts: GtTexts;
  public initializedSearch: boolean;
  public total: number;

  @Input() public filter: GenericTableFilter;
  @Input() public gtConfig: GenericTableConfig;
  @Input() public gtRowComponent: Type<any>;
  @Input() public service: GenericTableService;

  @ViewChild('genericTable') public genericTable: GtComponent<any, GtExpandedRow>;

  public constructor() {
    this.gtTexts = gtTexts['pt-BR'];
    this.initializedSearch = false;
    this.total = 0;
  }

  public ngOnInit(): void {
    this.genericTable.loading = false;
  }

  public search($event?: Event): void {
    this.errorMessage = null;
    this.genericTable.loading = true;

    this.service.search(this.filter).subscribe(
      (data: { total: number, result: Array<GenericTableData> }) => {
        this.initializedSearch = true;
        this.gtConfig.data = data.result;
        this.total = data.total;
        this.gtConfig.info = {
          pageCurrent: this.filter.page,
          recordLength: this.filter.limit,
          recordsAll: data.total,
          recordsAfterFilter: data.total,
          recordsAfterSearch: data.total
        }
      },
      (error: Response) => {
        this.errorMessage = error.json()['message'];
        this.genericTable.loading = false;
      }
    );

    if ($event) {
      $event.preventDefault();
    }
  }

  public isLoading(): boolean {
    return this.genericTable.loading;
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
