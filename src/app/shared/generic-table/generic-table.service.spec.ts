/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenericTableService } from './generic-table.service';

describe('Service: GenericTable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericTableService]
    });
  });

  it('should ...', inject([GenericTableService], (service: GenericTableService) => {
    expect(service).toBeTruthy();
  }));
});