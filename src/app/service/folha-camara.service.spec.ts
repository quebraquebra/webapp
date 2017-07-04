/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FolhaCamaraService } from './folha-camara.service';

describe('Service: FolhaCamara', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolhaCamaraService]
    });
  });

  it('should ...', inject([FolhaCamaraService], (service: FolhaCamaraService) => {
    expect(service).toBeTruthy();
  }));
});
