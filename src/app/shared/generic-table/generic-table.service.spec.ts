/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenericTableService } from './generic-table.service';

import { FolhaCamaraService } from '../../folha/folha-camara';

describe('Service: GenericTable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolhaCamaraService]
    });
  });

  it('should ...', inject([FolhaCamaraService], (service: GenericTableService) => {
    expect(service).toBeTruthy();
  }));
});
